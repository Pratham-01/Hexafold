import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserClientService } from 'src/app/services/user-client.service';
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

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private router: Router,
    private usersService: UsersService,
    private activatedRouter: ActivatedRoute,
    private userClientService: UserClientService

  ) {}

  type:any;

  ngOnInit(): void {
    this.type = this.activatedRouter.snapshot.paramMap.get('type');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    if (!this.signUpForm.valid) return;

    const { name, email, password } = this.signUpForm.value;
    this.authService
      .signUp((email == undefined ? '' : email), password!)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid:uid , email:<string>email , displayName: name! })
        ),
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing in',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        if(this.type == "user") this.createUser();
        else if(this.type == "client") this.createClient();
        this.router.navigate(['/home']);
      });
  }

  onNavigateToLogin(){
    this.router.navigate(["login", this.type]);
  }

  createClient(){
    const { name, email, password } = this.signUpForm.value;
    let body:any = {
      email: email,
			name: name,
			password: password,
			company_id: sessionStorage.getItem("companyId"),
    }
    this.userClientService.createClient(body).subscribe((response:any) => {
      if(response){
        console.log(response);
      }
    })
  }
  createUser(){
    const { name, email, password } = this.signUpForm.value;
    let body:any = {
      email: email,
			name: name,
			password: password,
			company_id: sessionStorage.getItem("companyId"),
    }
    this.userClientService.createUser(body).subscribe((response:any) => {
      if(response){
        console.log(response);
      }
    })
  }

}