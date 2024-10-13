import { Component, computed, input } from '@angular/core';
import { ElementInteractiveDirective } from '../../../shared/ui/element/element-interactive.directive';
import { Card } from './card';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { DecorationComponent } from '../decoration/decoration.component';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [DecorationComponent, IconComponent],
    templateUrl: './card.component.html',
    hostDirectives: [
        { directive: ElementInteractiveDirective, inputs: ['isDisabled'] },
    ],
    host: {
        class: `
            block
            relative
            mobile:w-20
            mobile:h-32
            tablet:w-32
            tablet:h-48
            desktop:w-48
            desktop:h-72
            max-w-dvh
            max-h-dvh
            rounded-xl
            text-center
            content-center
            mobile:text-3xl
            tablet:text-5xl
            desktop:text-6xl
        `,
    },
})
export class CardComponent {
    public readonly data = input<Card>();

    public readonly isEmpty = input(false);
}
