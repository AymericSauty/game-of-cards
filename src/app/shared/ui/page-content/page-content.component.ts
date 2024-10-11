import { Component } from '@angular/core';

@Component({
    selector: 'app-page-content',
    standalone: true,
    imports: [],
    templateUrl: './page-content.component.html',
    host: {
        class: `
            block
            mobile:p-2
            tablet:p-5
            desktop:p-10
        `,
    },
})
export class PageContentComponent {}
