import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiCollection<Entity, Request> {
    public constructor(
        public readonly url: string,
        public readonly httpClient: HttpClient,
    ) {}

    public create$(body: Request): Observable<Entity> {
        return this.httpClient.post<Entity>(this.url, body);
    }

    public getAll$(): Observable<Entity[]> {
        return this.httpClient.get<Entity[]>(this.url);
    }
}
