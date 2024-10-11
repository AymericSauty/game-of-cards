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
            h-20
            mobile:mx-2
            tablet:mx-5
            desktop:mx-10
            rounded-b-3xl
            text-4xl
            font-semibold
            tracking-wide
        `,
    },
    hostDirectives: [ElementDirective],
})
export class HeaderComponent {
    public readonly title = input.required<string>();
}
