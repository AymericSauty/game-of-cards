import { Directive } from '@angular/core';

@Directive({
    selector: '[appElement]',
    exportAs: 'appElement',
    standalone: true,
    host: {
        class: `
            shadow-sm
            bg-light-2
            shadow-dark-3/15
            dark:bg-dark-2
            dark:shadow-light-2/5
        `,
    },
})
export class ElementDirective {}
