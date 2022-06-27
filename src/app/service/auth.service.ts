import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {Router} from "@angular/router";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private logService: LogService,
  ) { }

  initAuthListener(): Observable<any> {
    return this.afAuth.authState.pipe(
      tap(user => {
        return user;
      })
    );
  }

  initAuthListenerPromise(): Observable<any> {
    return this.afAuth.authState.pipe(
      tap(user => {
        return user;
      })
    );
  }

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.logService.setLog({
          email: result.user?.email,
          logMessage: 'login',
          logObject: result
        });
        this.router.navigate(['/']);
      })
      .catch((error) => {
        alert('login olunması sırsında bir hata ile karşılaşılmıştır.');
      });
  }

  logout() {
    this.afAuth.signOut().then(res => {
      this.router.navigate(['/admin-login']);
    })
  }
}
