import { Component, inject, OnInit } from '@angular/core';
import { formRegistryFactory } from './registry';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { InputDirective } from '../../../../shared/ui/input/input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageStore } from '../game-page.store';

@Component({
    selector: 'app-registry',
    standalone: true,
    imports: [ButtonComponent, InputDirective, ReactiveFormsModule],
    templateUrl: './registry.component.html',
})
export class RegistryComponent {
    public readonly store = inject(GamePageStore);

    public readonly form = formRegistryFactory();

    public submit(): void {
        if (!this.form.valid) {
            return;
        }

        this.store.startGame(this.form.getRawValue().players);
    }
}
