import { Component, computed, input } from '@angular/core';
import {
    decorationPosition,
    decorationType,
    DecorationType,
    getDecorationPosition,
} from './decoration-position';
import { IconComponent } from '../../../shared/ui/icon/icon.component';

@Component({
    selector: 'app-decoration',
    standalone: true,
    imports: [IconComponent],
    templateUrl: './decoration.component.html',
    host: { class: `block` },
})
export class DecorationComponent {
    public readonly type = input<DecorationType>();

    public readonly offset = input(16);

    public readonly icons = computed(() =>
        decorationPosition.map((position, index) => ({
            name: this.type() ?? decorationType[index],
            position: getDecorationPosition(position, this.offset()),
        })),
    );
}
