import { Component, computed, input } from '@angular/core';
import {
    decorationPosition,
    getDecorationPosition,
} from './decoration-position';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { cardType, CardType } from '../card/card';

@Component({
    selector: 'app-decoration',
    standalone: true,
    imports: [IconComponent],
    templateUrl: './decoration.component.html',
    host: { class: `block` },
})
export class DecorationComponent {
    public readonly type = input<CardType>();

    public readonly offset = input(16);

    public readonly icons = computed(() =>
        decorationPosition.map((position, index) => ({
            name: this.type() ?? cardType[index],
            position: getDecorationPosition(position, this.offset()),
        })),
    );
}
