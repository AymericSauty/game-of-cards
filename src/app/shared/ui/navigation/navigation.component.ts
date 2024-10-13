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
            mobile:mx-4
            tablet:mx-8
            desktop:mx-16
        `,
    },
})
export class NavigationComponent {
    public readonly routes = input.required<Routes>();
}
