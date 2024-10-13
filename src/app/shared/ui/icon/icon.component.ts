import { Component, input } from '@angular/core';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    host: { class: `inline-block` },
})
export class IconComponent {
    public readonly name = input.required<
        'clover' | 'diamond' | 'heart' | 'spade'
    >();
}
