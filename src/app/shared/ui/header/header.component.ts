import { Component, input } from '@angular/core';
import { ElementDirective } from '../element/element.directive';

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
            px-4
            py-2
            mobile:mx-4
            tablet:mx-8
            desktop:mx-16
            rounded-b-xl
            mobile:text-3xl
            tablet:text-4xl
            desktop:text-6xl
            font-semibold
            tracking-wider
        `,
    },
    hostDirectives: [ElementDirective],
})
export class HeaderComponent {
    public readonly title = input.required<string>();
}
