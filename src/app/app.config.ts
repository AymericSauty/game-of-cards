import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authIntercept } from '../shared/data-access/interceptor/auth-interceptor.interceptor';

const API_TOKEN = 'hiring-frontend-api-server';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([
                (req, next) => authIntercept(req, next, API_TOKEN),
            ]),
        ),
    ],
};
