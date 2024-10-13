import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoginToken } from './login.selector';
import { map, tap } from 'rxjs';

export const loginGuard: CanActivateFn = () => {
    const router = inject(Router);

    const store = inject(Store);

    return store.select(selectLoginToken).pipe(
        map((token) =>
            token != null ? true : router.createUrlTree(['/login']),
        ),
    );
};
