import { Injectable } from '@angular/core';
import { GameEntity } from './game/entity/game.entity';
import { GameRequest } from './game/request/game.request';
import { PlayerEntity } from './player/entity/player.entity';
import { PlayerRequest } from './player/request/player.request';
import { ApiCollection } from '../../shared/data-access/api-collection/api-collection';
import { CacheEndPoint } from '../../shared/data-access/end-point/cache-end-point';

@Injectable({ providedIn: 'root' })
export class ApiV1Service extends CacheEndPoint {
    public readonly url = `/api/v1`;

    public get games(): ApiCollection<GameEntity, GameRequest> {
        return this.getEndPoint(
            ApiCollection<GameEntity, GameRequest>,
            '/games',
        );
    }

    public get players(): ApiCollection<PlayerEntity, PlayerRequest> {
        return this.getEndPoint(
            ApiCollection<PlayerEntity, PlayerRequest>,
            '/players',
        );
    }
}
