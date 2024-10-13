import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
    BoardItem,
    GamePageState,
    GamePlayer,
    initialGamePageState,
} from './game-page.state';
import {
    delay,
    filter,
    forkJoin,
    fromEvent,
    map,
    Observable,
    switchMap,
    tap,
} from 'rxjs';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { createGamePlayers, getWinners } from './game-logic';
import { Score } from '../../ui/score/score';
import { ApiV1Service } from '../../data-access/api-v1.service';

@Injectable()
export class GamePageStore extends ComponentStore<GamePageState> {
    private readonly api = inject(ApiV1Service);

    public readonly boardItems = this.selectSignal((state) => state.boardItems);

    public readonly players = this.selectSignal((state) => state.players);

    public readonly progress = this.selectSignal((state) => state.progress);

    public readonly score = this.selectSignal<Score[]>((state) => {
        const winners = getWinners(state.players, (player) => player.score);

        return state.players.map((player) => ({
            player: player.name,
            score: player.score,
            isWinner: winners.map((w) => w.id).includes(player.id),
        }));
    });

    public readonly startGame = this.effect<string[]>(
        (trigger$: Observable<string[]>) =>
            trigger$.pipe(
                tap(() => this.updateProgress('loading')),
                switchMap((playersName) =>
                    forkJoin(
                        playersName.map((name) =>
                            this.api.players.create$({ name }),
                        ),
                    ),
                ),
                tapResponse({
                    next: (players) => {
                        this.updatePlayers(createGamePlayers(players));
                        this.updateProgress('started');
                    },
                    error: () => {
                        throw new Error(`La création des joueurs a échoué.`);
                    },
                }),
            ),
    );

    public readonly renewGame = this.effect<void>((trigger$) =>
        trigger$.pipe(tap(() => this.updateProgress('registry'))),
    );

    public readonly playCard = this.effect<GamePlayer>(
        (trigger$: Observable<GamePlayer>) =>
            trigger$.pipe(
                tap((player) => {
                    if (player.isWaiting) {
                        return;
                    }

                    const card = player.deck.pop();

                    if (card != null) {
                        player.isWaiting = true;
                        this.addItemToBoard({
                            card,
                            playerIndex: player.index,
                        });
                    }
                }),
            ),
    );

    private readonly playFromKeyboard$ = this.select(
        (state) => state.progress,
    ).pipe(
        filter((progress) => progress === 'started'),
        switchMap(() =>
            fromEvent<KeyboardEvent>(window, 'keydown').pipe(
                filter((e) => e.isTrusted),
                map((event) => Number(event.key)),
            ),
        ),
    );

    private readonly playCardFromKeyboard = this.effect(() =>
        this.playFromKeyboard$.pipe(
            switchMap((key) =>
                this.select((state) => state.players).pipe(
                    map((players) =>
                        players.find((_, index) => index + 1 === key),
                    ),
                    filter((player) => player != null),
                ),
            ),
            tap((player) => this.playCard(player)),
        ),
    );

    private readonly addItemToBoard = this.updater(
        (state, boardItem: BoardItem): GamePageState => ({
            ...state,
            boardItems: [...state.boardItems, boardItem],
        }),
    );

    private readonly resetBoardItems = this.updater(
        (state): GamePageState => ({
            ...state,
            boardItems: [],
        }),
    );

    private readonly updatePlayers = this.updater(
        (state, players: GamePageState['players']): GamePageState => ({
            ...state,
            players,
        }),
    );

    private readonly updateProgress = this.updater(
        (state, progress: GamePageState['progress']): GamePageState => ({
            ...state,
            progress,
        }),
    );

    private readonly cardCompetitionManagement = this.effect(() =>
        this.select((state) => state.boardItems).pipe(
            concatLatestFrom(() => this.select((state) => state.players)),
            filter(
                ([boardItems, players]) =>
                    boardItems.length > 1 &&
                    boardItems.length === players.length,
            ),
            map(([boardItems, players]) => ({
                players,
                winnerItems: getWinners(boardItems, (item) => item.card.value),
            })),
            delay(1500),
            tap(({ players, winnerItems }) => {
                const winners = players.filter((player) =>
                    winnerItems
                        .map((item) => item.playerIndex)
                        .includes(player.index),
                );

                winners.forEach((player) => player.score++);
                players.forEach((p) => (p.isWaiting = false));
                this.resetBoardItems();
            }),
            filter(({ players }) =>
                players.every((player) => player.deck.length === 0),
            ),
            tap(() => this.updateProgress('finished')),
        ),
    );

    private readonly persistGameScore = this.effect(() =>
        this.state$.pipe(
            filter((state) => state.progress === 'finished'),
            switchMap((state) =>
                this.api.games.create$(
                    state.players.map((player) => ({
                        playerId: player.id,
                        score: player.score,
                    })),
                ),
            ),
            tapResponse({
                next: () => {},
                error: () => {
                    throw new Error(`La création de la partie a échoué.`);
                },
            }),
        ),
    );

    constructor() {
        super(initialGamePageState);
    }
}
