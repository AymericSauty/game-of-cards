import { Component, inject } from '@angular/core';
import { GamePageStore } from '../game-page.store';
import { PlayerComponent } from '../player/player.component';
import { CardComponent } from "../../../ui/card/card.component";

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [PlayerComponent, CardComponent],
    templateUrl: './board.component.html',
    host: {
        class: `
            grid
            gap-4
            mobile:grid-rows-[auto_1fr_auto]
            tablet:grid-cols-[auto_1fr_auto]
            desktop:grid-cols-[auto_1fr_auto]
        `,
    },
})
export class BoardComponent {
    public readonly store = inject(GamePageStore);
}
