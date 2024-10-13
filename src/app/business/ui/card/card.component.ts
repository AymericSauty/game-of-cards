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
            w-48
            max-w-dvh
            h-72
            max-h-dvh
            rounded-xl
            text-center
            content-center
            text-6xl
        `,
    },
})
export class CardComponent {
    public readonly data = input<Card>();
}
