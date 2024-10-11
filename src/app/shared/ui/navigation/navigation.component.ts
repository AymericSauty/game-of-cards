import { Component, input } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { ElementLinkDirective } from '../element/element-link.directive';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [RouterLink, ElementLinkDirective],
    templateUrl: './navigation.component.html',
    host: {
        class: `
            block
            mobile:mx-2
            tablet:mx-5
            desktop:mx-10
        `,
    },
})
export class NavigationComponent {
    public readonly routes = input.required<Routes>();
}
