import { Component, inject } from '@angular/core';
import { GamePageStore } from '../game-page.store';
import { DeckComponent } from '../../../ui/deck/deck.component';

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [DeckComponent],
    templateUrl: './board.component.html',
    host: {
        class: `
            grid
            gap-4
            mobile:grid-rows-[auto_1fr_auto]
            tablet:grid-cols-[auto_1fr_auto]
            desktop:grid-cols-[auto_1fr_auto]
            h-full
            content-center
        `,
    },
})
export class BoardComponent {
    public readonly store = inject(GamePageStore);
}
