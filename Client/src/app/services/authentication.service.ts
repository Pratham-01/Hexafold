import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth' 
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  navigationSubject:any = new Subject();

  currentUser$ = authState(this.auth);
  constructor(private auth: Auth) { }

  login(email: any, password: any){

    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(){

    return from(this.auth.signOut());
  }
}


