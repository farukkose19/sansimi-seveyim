import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import {Observable, tap} from "rxjs";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void { }

  login() {
    this.authService.googleAuth()
  }
}
