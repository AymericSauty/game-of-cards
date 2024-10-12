import { Routes } from '@angular/router';

export const gameCardRoutes: Routes = [
    {
        title: 'Score',
        path: 'score',
        loadComponent: () =>
            import('./business/feature/score-page/score-page.component').then(
                (c) => c.ScorePageComponent,
            ),
    },
    {
        title: 'Play',
        path: 'play',
        loadComponent: () =>
            import('./business/feature/game-page/game-page.component').then(
                (c) => c.GamePageComponent,
            ),
    },
];

export const routes: Routes = [
    ...gameCardRoutes,
    { path: '', redirectTo: 'score', pathMatch: 'full' },
    { path: '**', redirectTo: 'score' },
];
