import { Component, input } from '@angular/core';
import { ElementDirective } from '../../../shared/ui/element/element.directive';
import { Score } from './score';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-game',
    standalone: true,
    imports: [IconComponent, UpperCasePipe],
    templateUrl: './game.component.html',
    hostDirectives: [ElementDirective],
    host: {
        class: `
            block
            relative
            rounded-xl
            px-4 py-4
        `,
    },
})
export class GameComponent {
    public readonly data = input.required<Score[]>();
}
