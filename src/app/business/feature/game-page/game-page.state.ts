import { Card } from '../../ui/card/card';

export interface GamePlayer {
    score: number;
    name: string;
    deck: Card[];
}

export interface GamePageState {
    players: GamePlayer[];
    progress: 'unstarted' | 'started' | 'finished';
}

export const initialGamePageState: GamePageState = {
    players: [],
    progress: 'unstarted',
};
