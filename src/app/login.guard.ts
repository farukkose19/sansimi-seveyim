import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      this.authService.initAuthListener().subscribe(res => {
        if (res) {
          obs.next(true);
        } else {
          this.router.navigate(['/admin-login']);
          obs.next(false);
        }
      }, error => {
        this.router.navigate(['/admin-login']);
        obs.next(false);
      });
    });
  }

}
