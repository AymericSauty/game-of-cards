import { Component, computed, input, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-deck',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './deck.component.html',
    host: {
        class: `
            block
            relative
            z-0
            max-w-fit
        `,
        '(mouseenter)': 'setOffsetMultiplier(4)',
        '(mouseleave)': 'offsetMultiplier.set(2)',
    },
})
export class DeckComponent {
    public readonly isDisabled = input(false);

    public readonly nbCard = input.required<number>();

    public readonly orientation = input.required<'left' | 'right'>();

    public readonly offsetMultiplier = signal<number>(2);

    public readonly offsetOrientationMultiplier = computed(
        () =>
            this.offsetMultiplier() * (this.orientation() === 'right' ? 1 : -1),
    );

    public readonly cards = computed(() =>
        Array.from({ length: this.nbCard() }),
    );

    public setOffsetMultiplier(multiplier: number): void {
        if (this.isDisabled()) {
            return;
        }

        this.offsetMultiplier.set(multiplier);
    }
}
