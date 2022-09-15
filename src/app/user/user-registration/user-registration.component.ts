import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [
    //     Validators.required,
    //     Validators.maxLength(10),
    //   ]),
    // });
    this.createRegisterationForm();
  }


  createRegisterationForm() {
    this.registrationForm =  this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {
      validators: MustMatch('password', 'confirmPassword'),
    });
}

  // passwordMatchingValidator(fg: FormGroup) {
  //   return fg.get('password')?.value === fg.get('confirmPassword')?.value
  //     ? null
  //     : { notmatched: true };
  // }

  onSubmit() {
    console.log(this.registrationForm);
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
