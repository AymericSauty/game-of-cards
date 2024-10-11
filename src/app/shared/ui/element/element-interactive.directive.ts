import { Directive, model } from '@angular/core';
import { ElementDirective } from './element.directive';

@Directive({
    selector: '[appElementInteractive]',
    exportAs: 'appElementInteractive',
    standalone: true,
    hostDirectives: [ElementDirective],
    host: {
        class: `
            select-none
            transition
            hover:bg-surface-light-1
            dark:hover:bg-surface-dark-1
            [&.isActive]:bg-surface-light-2
            [&.isActive]:hover:bg-surface-light-3
            [&.isActive]:dark:bg-surface-dark-2
            [&.isActive]:dark:hover:bg-surface-dark-3
        `,
        '[class.isActive]': `isActive() || linkActive`,
    },
})
export class ElementInteractiveDirective {
    public readonly isActive = model(false);
}
