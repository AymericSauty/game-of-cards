import { Component, input } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    host: {
        class: `
            block
            text-center
            content-center
            h-20
            mobile:mx-2
            tablet:mx-5
            desktop:mx-10
            rounded-b-3xl
            text-4xl
            font-semibold
            tracking-wide
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
export class HeaderComponent {
    public title = input.required<string>();
}
