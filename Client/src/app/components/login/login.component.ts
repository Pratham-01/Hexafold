import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  
  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // console.log(typeof email);
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in Succesfully!',
        loading: 'Loggin in...',
        error: 'There was an error'
      })
    ).subscribe(() => {
      this.authService.navigationSubject.next("dashboard");
      this.router.navigate(['/dashboard']);
    });


  }
}