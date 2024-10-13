import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Set login',
    props<{token: string }>(),
);
