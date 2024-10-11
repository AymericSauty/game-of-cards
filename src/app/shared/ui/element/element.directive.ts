import { Directive } from '@angular/core';

@Directive({
    selector: '[appElement]',
    exportAs: 'appElement',
    standalone: true,
    host: {
        class: `
            drop-shadow
            text-dark-2
            bg-light-2
            shadow-light-3
            dark:text-light-3
            dark:bg-dark-2
            dark:shadow-light-2
        `,
    },
})
export class ElementDirective {}
