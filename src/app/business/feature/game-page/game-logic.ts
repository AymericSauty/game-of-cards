import { PlayerEntity } from '../../data-access/player/entity/player.entity';
import { Card, cardType } from '../../ui/card/card';
import { GamePlayer } from './game-page.state';

export const gameDeck: Card[] = cardType.flatMap((type) =>
    Array.from({ length: 2 }, (_, i) => i + 1).map((value) => ({
        value,
        type,
    })),
);

export function createGamePlayers(players: PlayerEntity[]): GamePlayer[] {
    const deck = shuffleDeck(gameDeck);

    const randCut = Math.floor(Math.random() * (deck.length + 1));
    const cutDeck1 = [...deck].splice(0, randCut);
    const cutDeck2 = [...deck].splice(randCut, deck.length);
    const cuttedDeck = [...cutDeck2, ...cutDeck1];

    const player1: GamePlayer = {
        id: players[0].id,
        index: 1,
        score: 0,
        name: players[0].name,
        deck: cuttedDeck.filter((_, i) => i % 2 === 0),
        isWaiting: false,
    };

    const player2: GamePlayer = {
        id: players[1].id,
        index: 2,
        score: 0,
        name: players[1].name,
        deck: cuttedDeck.filter((_, i) => i % 2 === 1),
        isWaiting: false,
    };

    return [player1, player2];
}

function shuffleDeck(deck: Card[]): Card[] {
    return deck
        .map((c) => ({ c, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ c }) => c);
}

export function getWinners<T>(arr: T[], getScore: (obj: T) => number): T[] {
    const maxScore = Math.max(...arr.map(getScore));
    return arr.filter((obj) => getScore(obj) === maxScore);
}
