import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormLogin {
    token: FormControl<string>;
}

export function formLoginFactory(): FormGroup<FormLogin> {
    return new FormGroup({
        token: new FormControl<string>('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });
}
