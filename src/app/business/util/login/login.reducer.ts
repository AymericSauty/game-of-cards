import { createReducer, on } from '@ngrx/store';
import { login } from './login.action';
import { LoginState } from './login.selector';

export const loginFeatureKey = 'login';

export const initialLoginState: LoginState = {
    token: null,
};

export const loginReducer = createReducer(
    initialLoginState,
    on(login, (state, { token }) => {
        return { ...state, token };
    }),
);
