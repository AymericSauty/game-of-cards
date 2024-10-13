import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [],
    templateUrl: './layout.component.html',
    host: {
        class: `
            grid
            grid-rows-[auto_auto_1fr]
            min-h-screen
            text-dark-2
            dark:text-light-3
            dark:bg-dark-1
            light:bg-light-1
        `,
    },
})
export class LayoutComponent {}
