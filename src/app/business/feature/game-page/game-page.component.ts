import { Component, inject } from '@angular/core';
import { GamePageStore } from './game-page.store';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { BoardComponent } from './board/board.component';
import { ScoreComponent } from '../../ui/score/score.component';
import { RegistryComponent } from './registry/registry.component';
import { SpinnerComponent } from '../../../shared/ui/spinner/spinner.component';

@Component({
    selector: 'app-game-page',
    standalone: true,
    imports: [
        BoardComponent,
        ButtonComponent,
        RegistryComponent,
        SpinnerComponent,
        ScoreComponent,
    ],
    templateUrl: './game-page.component.html',
    providers: [GamePageStore],
    host: {
        class: `
            block
            h-full
            content-center
        `,
    },
})
export class GamePageComponent {
    public readonly store = inject(GamePageStore);
}
