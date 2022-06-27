import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {UserListGroupComponent} from './user/user-list-group/user-list-group.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {AdminAddGroupComponent} from './admin/admin-add-group/admin-add-group.component';
import {UserLuckyLukeComponent} from './user/user-lucky-luke/user-lucky-luke.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthService} from "./service/auth.service";
import {LoginGuard} from "./login.guard";
import {LogService} from "./service/log.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    UserListGroupComponent,
    AdminLoginComponent,
    AdminAddGroupComponent,
    UserLuckyLukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    LoginGuard,
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
