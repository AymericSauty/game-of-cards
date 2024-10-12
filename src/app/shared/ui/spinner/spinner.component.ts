import { Component, input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    standalone: true,
    imports: [],
    templateUrl: './spinner.component.html',
    host: {
        class: `
            block
            text-center
            text-surface-dark-2
            dark:text-surface-light-2
        `,
    },
})
export class SpinnerComponent {
    public readonly size = input(20);
}
