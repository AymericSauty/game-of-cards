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
            mobile:mx-4
            tablet:mx-8
            desktop:mx-16
            rounded-b-xl
            text-4xl
            font-semibold
            tracking-wider
        `,
    },
    hostDirectives: [ElementDirective],
})
export class HeaderComponent {
    public readonly title = input.required<string>();
}
