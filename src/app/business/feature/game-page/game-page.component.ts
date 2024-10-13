import { Component, inject } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { DeckComponent } from '../../ui/deck/deck.component';
import { GamePageStore } from './game-page.store';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { BoardComponent } from './board/board.component';

@Component({
    selector: 'app-game-page',
    standalone: true,
    imports: [CardComponent, DeckComponent, BoardComponent, ButtonComponent],
    templateUrl: './game-page.component.html',
    providers: [GamePageStore],
    host: { class: `block h-full` },
})
export class GamePageComponent {
    public readonly store = inject(GamePageStore);
}
