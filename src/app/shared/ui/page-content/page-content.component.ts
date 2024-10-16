import { Component } from '@angular/core';

@Component({
    selector: 'app-page-content',
    standalone: true,
    imports: [],
    templateUrl: './page-content.component.html',
    host: {
        class: `
            block
            mobile:py-2
            tablet:py-4
            desktop:py-8
            mobile:px-4
            tablet:px-8
            desktop:px-16
        `,
    },
})
export class PageContentComponent {}
