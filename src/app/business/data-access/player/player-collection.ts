import { ApiCollection } from '../../../shared/data-access/api-collection/api-collection';
import { PlayerEntity } from './entity/player.entity';
import { PlayerRequest } from './request/player.request';

export class PlayerCollection extends ApiCollection<PlayerEntity, PlayerRequest> {}
