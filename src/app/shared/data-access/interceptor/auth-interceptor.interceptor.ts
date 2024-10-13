import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authIntercept(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
    token: string,
): Observable<HttpEvent<unknown>> {
    req = req.clone({
        headers: req.headers.set('Authorization', token),
    });

    return next(req);
}
