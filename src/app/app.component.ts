import { Component } from '@angular/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sansimi-seveyim';
  isUserLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    authService.initAuthListener().subscribe(res => {
      if (res) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    })
  }

  logout() {
    this.authService.logout();
  }

}
