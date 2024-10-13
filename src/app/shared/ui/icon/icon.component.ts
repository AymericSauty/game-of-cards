import { Component, input } from '@angular/core';
import { CardType } from '../../../business/ui/card/card';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    host: { class: `inline-block` },
})
export class IconComponent {
    public readonly name = input.required<CardType>();
}
