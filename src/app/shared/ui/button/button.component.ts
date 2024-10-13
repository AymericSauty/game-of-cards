import { Component } from '@angular/core';
import { ElementInteractiveDirective } from '../element/element-interactive.directive';

@Component({
    selector: 'button[app-button], a[app-button]',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    hostDirectives: [
        {
            directive: ElementInteractiveDirective,
            inputs: ['isActive', 'isDisabled'],
        },
    ],
    host: {
        class: `
            inline-block
            px-4
            py-2
            rounded-3xl
            font-semibold
            tracking-wide
        `,
    },
})
export class ButtonComponent {}
