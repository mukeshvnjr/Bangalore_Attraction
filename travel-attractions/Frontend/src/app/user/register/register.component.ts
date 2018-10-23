import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { UserService } from '../../services/user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  userDetailsForm: FormGroup;

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'Last name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'mobile': [
      { type: 'required', message: 'Mobile is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'address': [
      { type: 'required', message: 'Address is required' }
    ],
    'street': [
      { type: 'required', message: 'Street is required' }
    ],
    'city': [
      { type: 'required', message: 'City is required' }
    ],
    'state': [
      { type: 'required', message: 'State is required' }
    ],
    'zipCode': [
      { type: 'required', message: 'Zip Code is required' }
    ],
    'country': [
      { type: 'required', message: 'Country is required' }
    ],
    'cpassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'validate', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ],
    'mailPrederence': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
   }

   ngOnInit() {
    this.registerUser();
  }
  registerUser() {
    this.userDetailsForm = this.fb.group({
      firstName: [null, Validators.required ],
      lastName: [null, Validators.required ],
      email: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      mobile: [null, Validators.required ],
      address: [null, Validators.required ],
      street: [null, Validators.required ],
      city: [null, Validators.required ],
      state: [null, Validators.required ],
      zipCode: [null, Validators.required ],
      country: [null, Validators.required ],
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      cpassword: ['', Validators.required],
      // matching_passwords: this.matching_passwords_group,
      terms: new FormControl(false, Validators.pattern('true')),
      mailPrederence: new FormControl(false, Validators.pattern('true'))
    }
  );

    // this.matching_passwords_group = this.fb.group({
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required,
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ])),
    //   cpassword: ['', Validators.required]
    // }, {
    //   validator: PasswordValidator.areEqual
    // });
  }

  onSubmitUserDetails() {
    if ( !this.userDetailsForm.valid) {
      console.log('Invalid form');
      return;
    }
    this._userService.registerUser(JSON.stringify(this.userDetailsForm.value))
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }

}

