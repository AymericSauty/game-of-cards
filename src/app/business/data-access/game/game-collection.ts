import { ApiCollection } from '../../../shared/data-access/api-collection/api-collection';
import { GameEntity } from './entity/game.entity';
import { GameRequest } from './request/game.request';

export class GameCollection extends ApiCollection<GameEntity, GameRequest> {}
