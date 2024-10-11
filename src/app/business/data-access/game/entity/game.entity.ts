import { ScoreEntity } from './score.entity';

export interface GameEntity {
    id: number;
    scores: ScoreEntity[];
}
