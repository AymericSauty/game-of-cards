import { Injectable } from '@angular/core';
import { CacheEndPoint } from '../../shared/data-access/end-point/cache-end-point';
import { GameCollection } from './game/game-collection';
import { PlayerCollection } from './player/player-collection';

@Injectable({ providedIn: 'root' })
export class ApiV1Service extends CacheEndPoint {
    public readonly url = `/api/v1`;

    public get games(): GameCollection {
        return this.getEndPoint(GameCollection, '/games');
    }

    public get players(): PlayerCollection {
        return this.getEndPoint(PlayerCollection, '/players');
    }
}
