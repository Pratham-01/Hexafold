import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserInfo } from '@angular/fire/auth' 
import {concatMap,from, Observable, of } from 'rxjs';
=======
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth' 
import { from, Subject } from 'rxjs';
>>>>>>> d06b24c8fa7b0e72e9ce9b030501f4de6ade8b84

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

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap((user) => {
        if (!user) throw new Error('Not Authenticated');

        return updateProfile(user, profileData);
      })
    );
  }
}


