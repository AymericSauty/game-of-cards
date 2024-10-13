import { Routes } from '@angular/router';
import { loginGuard } from './business/util/login/login.guard';

export const gameCardRoutes: Routes = [
    {
        title: 'Score',
        path: 'score',
        canActivate: [loginGuard],
        loadComponent: () =>
            import('./business/feature/score-page/score-page.component').then(
                (c) => c.ScorePageComponent,
            ),
    },
    {
        title: 'Play',
        path: 'play',
        canActivate: [loginGuard],
        loadComponent: () =>
            import('./business/feature/game-page/game-page.component').then(
                (c) => c.GamePageComponent,
            ),
    },
];

export const routes: Routes = [
    ...gameCardRoutes,
    {
        title: 'Login',
        path: 'login',
        loadComponent: () =>
            import('./business/feature/login-page/login-page.component').then(
                (c) => c.LoginPageComponent,
            ),
    },
    { path: '', redirectTo: 'score', pathMatch: 'full' },
    { path: '**', redirectTo: 'score' },
];
