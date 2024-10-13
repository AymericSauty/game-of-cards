import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { formLoginFactory } from './login-page';
import { login } from '../../util/login/login.action';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from '../../../shared/ui/input/input.directive';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [ReactiveFormsModule, InputDirective, ButtonComponent],
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
    public readonly router = inject(Router);

    public readonly store = inject(Store);

    public readonly form = formLoginFactory();

    public submit(): void {
        if (!this.form.valid) {
            return;
        }

        this.store.dispatch(login({ token: this.form.getRawValue().token }));
        this.router.navigate(['/score']);
    }
}
