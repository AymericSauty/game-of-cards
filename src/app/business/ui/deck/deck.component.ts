import { Component, computed, input, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ElementDirective } from '../../../shared/ui/element/element.directive';

@Component({
    selector: 'app-deck',
    standalone: true,
    imports: [CardComponent, ElementDirective],
    templateUrl: './deck.component.html',
    host: {
        class: `
            block
            relative
            z-0
            max-w-fit
        `,
        '(mouseenter)': 'offsetMultiplier.set(4)',
        '(mouseleave)': 'offsetMultiplier.set(2)',
    },
})
export class DeckComponent {
    public readonly nbCard = input.required<number>();

    public readonly orientation = input<'left' | 'right'>('left');

    public readonly offsetMultiplier = signal<number>(2);

    public readonly offsetOrientationMultiplier = computed(
        () =>
            this.offsetMultiplier() * (this.orientation() === 'left' ? 1 : -1),
    );

    public readonly cards = computed(() =>
        Array.from({ length: this.nbCard() }),
    );
}
