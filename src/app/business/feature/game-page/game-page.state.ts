import { Card } from '../../ui/card/card';

export interface BoardItem {
    playerIndex: number;
    card: Card;
}

export interface GamePlayer {
    id: number;
    index: number;
    score: number;
    name: string;
    deck: Card[];
    isWaiting: boolean;
}

export interface GamePageState {
    boardItems: BoardItem[];
    players: GamePlayer[];
    progress: 'registry' | 'loading' | 'started' | 'finished';
}

export const initialGamePageState: GamePageState = {
    boardItems: [],
    players: [],
    progress: 'registry',
};
