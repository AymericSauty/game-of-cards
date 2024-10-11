import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [],
    templateUrl: './layout.component.html',
    host: {
        class: `
            block
            min-h-screen
            dark:bg-dark-1
            light:bg-light-1
        `,
    },
})
export class LayoutComponent {}
