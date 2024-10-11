import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
    provideRouter,
    withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authIntercept } from './shared/data-access/interceptor/auth-interceptor.interceptor';

export const API_TOKEN = 'hiring-frontend-api-server';

export const APP_TITLE = 'Game of Cards';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withViewTransitions()),
        provideHttpClient(
            withInterceptors([
                (req, next) => authIntercept(req, next, API_TOKEN),
            ]),
        ),
    ],
};
