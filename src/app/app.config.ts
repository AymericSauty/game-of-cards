import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authIntercept } from './shared/data-access/interceptor/auth-interceptor.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import {
    loginFeatureKey,
    loginReducer,
} from './business/util/login/login.reducer';

export const APP_TITLE = 'Game of Cards';

export const appConfig: ApplicationConfig = {
    providers: [
        provideStore({ [loginFeatureKey]: loginReducer }),
        provideState({
            name: loginFeatureKey,
            reducer: loginReducer,
        }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withViewTransitions()),
        provideHttpClient(
            withInterceptors([(req, next) => authIntercept(req, next)]),
        ),
    ],
};
