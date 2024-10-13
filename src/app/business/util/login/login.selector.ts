import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey } from './login.reducer';

export interface LoginState {
    token?: string | null;
}

export const selectLoginState =
    createFeatureSelector<LoginState>(loginFeatureKey);

export const selectLoginToken = createSelector(
    selectLoginState,
    (state: LoginState) => state.token,
);
