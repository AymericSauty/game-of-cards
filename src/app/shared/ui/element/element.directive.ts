import { Directive } from '@angular/core';

@Directive({
    selector: '[appElement]',
    exportAs: 'appElement',
    standalone: true,
    host: {
        class: `
            shadow-sm
            text-dark-2
            bg-light-2
            shadow-dark-3/15
            dark:text-light-3
            dark:bg-dark-2
            dark:shadow-light-2/5
        `,
    },
})
export class ElementDirective {}
