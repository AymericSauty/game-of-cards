import { Directive, input, model } from '@angular/core';
import { ElementDirective } from './element.directive';

@Directive({
    selector: '[appElementInteractive]',
    exportAs: 'appElementInteractive',
    standalone: true,
    hostDirectives: [{ directive: ElementDirective }],
    host: {
        class: `
            select-none
            transition
            [&.isInteractive]:cursor-pointer
            [&.isInteractive]:hover:bg-surface-light-1
            [&.isInteractive]:dark:hover:bg-surface-dark-1
            [&.isActive]:bg-surface-light-2
            [&.isActive.isInteractive]:hover:bg-surface-light-3
            [&.isActive]:dark:bg-surface-dark-2
            [&.isActive.isInteractive]:dark:hover:bg-surface-dark-3
        `,
        '[class.isActive]': `isActive() || linkActive`,
        '[class.isInteractive]': `!isDisabled()`,
    },
})
export class ElementInteractiveDirective {
    public readonly isActive = model(false);

    public readonly isDisabled = model(false);
}
