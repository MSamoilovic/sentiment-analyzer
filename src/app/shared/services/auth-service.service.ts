import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInSource$ = new BehaviorSubject<boolean>(this.getLoggedIn());
  isLoggedIn$ = this.isLoggedInSource$.asObservable()
  
  constructor(private auth: AngularFireAuth) { }

  async Signin(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user))
      this.isLoggedInSource$.next(true);
    })
  }

  async Signup(email:string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.isLoggedInSource$.next(true);
    })
  }

  isLoggedIn():Observable<boolean> {
    return this.isLoggedIn$;
  }

  Logout() {
    debugger;
    this.auth.signOut();
    localStorage.removeItem('user');
    this.isLoggedInSource$.next(false);
  }

  private getLoggedIn():boolean {
    return !!localStorage.getItem('user');
  }
}
