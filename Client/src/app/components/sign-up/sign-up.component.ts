import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true,
      };
    }

    return null;
  };
}

interface User {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  users: User[] = [
    {value: '0', viewValue: 'Super User'},
    {value: '1', viewValue: 'Manager'},
    {value: '2', viewValue: 'Employee'},
    {value: '3', viewValue: 'Client'},
  ];

  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      user: new FormControl(''),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  get user() {
    return this.signUpForm.get('user');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    if (!this.signUpForm.valid) return console.log("not valid");

    const { name, email, password, user } = this.signUpForm.value;
    this.authService
      .signUp((email == undefined ? '' : email), password!)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid:uid , email:<string>email , displayName: name! , user: user!})
        ),
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing in',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}