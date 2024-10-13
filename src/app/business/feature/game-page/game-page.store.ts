import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GamePageState, initialGamePageState } from './game-page.state';
import { tap } from 'rxjs';

@Injectable()
export class GamePageStore extends ComponentStore<GamePageState> {
    public readonly players = this.selectSignal((state) => state.players);

    public readonly progress = this.selectSignal((state) => state.progress);

    public readonly updatePlayers = this.updater(
        (state, players: GamePageState['players']): GamePageState => ({
            ...state,
            players,
        }),
    );

    public readonly updateProgress = this.updater(
        (state, progress: GamePageState['progress']): GamePageState => ({
            ...state,
            progress,
        }),
    );

    public readonly startGame = this.effect<void>((trigger$) =>
        trigger$.pipe(tap(() => this.updateProgress('started'))),
    );

    constructor() {
        super(initialGamePageState);
    }
}
