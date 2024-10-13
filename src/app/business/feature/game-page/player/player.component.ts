import { Component, inject, input } from '@angular/core';
import { DeckComponent } from '../../../ui/deck/deck.component';
import { UpperCasePipe } from '@angular/common';
import { GamePageStore } from '../game-page.store';
import { GamePlayer } from '../game-page.state';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
    selector: 'app-player',
    standalone: true,
    imports: [DeckComponent, ButtonComponent, UpperCasePipe],
    templateUrl: './player.component.html',
    host: {
        class: `block`,
    },
})
export class PlayerComponent {
    public readonly store = inject(GamePageStore);

    public readonly data = input.required<GamePlayer>();

    public readonly deckOrientation = input<'left' | 'right'>('left');
}
