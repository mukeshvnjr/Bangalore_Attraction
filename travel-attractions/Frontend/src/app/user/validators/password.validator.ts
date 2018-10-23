import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';

export class PasswordValidator {
  // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
  static validate(userDetailsForm: FormGroup) {
    let password = userDetailsForm.controls.password.value;
    let cpassword = userDetailsForm.controls.cpassword.value;

    if (cpassword.length <= 0) {
        return null;
    }

    if (cpassword !== password) {
        return {
            doesMatchPassword: true
        };
    }
    return null;
  }
}
