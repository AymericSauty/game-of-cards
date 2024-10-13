import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, switchMap, take } from 'rxjs';
import { selectLoginToken } from '../../../business/util/login/login.selector';

export function authIntercept(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
    const store = inject(Store);

    return store.select(selectLoginToken).pipe(
        take(1),
        filter((token) => token != null),
        switchMap((token) => {
            console.log('test atuh');

            req = req.clone({
                headers: req.headers.set('Authorization', token),
            });

            return next(req);
        }),
    );
}
