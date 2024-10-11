import { Routes } from '@angular/router';

export const gameCardRoutes: Routes = [
    {
        title: 'Score',
        path: 'score',
        loadComponent: () =>
            import('./business/feature/score/score.component').then(
                (c) => c.ScoreComponent,
            ),
    },
    {
        title: 'Play',
        path: 'play',
        loadComponent: () =>
            import('./business/feature/play/play.component').then(
                (c) => c.PlayComponent,
            ),
    },
];

export const routes: Routes = [
    ...gameCardRoutes,
    { path: '', redirectTo: 'score', pathMatch: 'full' },
    { path: '**', redirectTo: 'score' },
];
