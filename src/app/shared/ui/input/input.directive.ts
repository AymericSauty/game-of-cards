import { Directive } from '@angular/core';

@Directive({
    selector: 'input[appInput]',
    standalone: true,
    host: {
        class: `
            block
            rounded-xl
            w-full
            bg-light-2
            dark:bg-dark-2
            px-2
            py-4
            border
            border-transparent
            [&.ng-invalid]:border-red
        `,
    },
})
export class InputDirective {}
