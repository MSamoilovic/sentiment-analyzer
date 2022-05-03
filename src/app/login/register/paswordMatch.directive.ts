// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormGroup } from "@angular/forms";

// export const passwordMatchingValidatior: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');

//   return password?.value === confirmPassword?.value ? null: { notmatched: true };
// };


export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}