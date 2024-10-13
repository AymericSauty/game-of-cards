import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormRegistry {
    players: FormArray<FormControl<string>>;
}

export function formRegistryFactory(): FormGroup<FormRegistry> {
    return new FormGroup({
        players: new FormArray<FormControl<string>>([
            new FormControl<string>('Player 1', {
                validators: [Validators.required],
                nonNullable: true,
                updateOn: 'blur',
            }),
            new FormControl<string>('Player 2', {
                validators: [Validators.required],
                nonNullable: true,
                updateOn: 'blur',
            }),
        ]),
    });
}
