import { inject, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export abstract class CacheEndPoint {
    abstract url: string;

    private readonly httpClient = inject(HttpClient);

    private readonly endPointCache = new Map();

    public getEndPoint<EndPoint>(
        endPoint: Type<EndPoint>,
        path: string,
        additionalParams: unknown[] = [],
    ): EndPoint {
        if (!this.endPointCache.has(endPoint)) {
            this.endPointCache.set(
                endPoint,
                new endPoint(
                    `${this.url}${path}`,
                    this.httpClient,
                    ...additionalParams,
                ),
            );
        }

        return this.endPointCache.get(endPoint);
    }
}
