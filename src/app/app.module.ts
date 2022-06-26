import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import { UserListGroupComponent } from './user/user-list-group/user-list-group.component';
import { AdminListGroupComponent } from './admin/admin-list-group/admin-list-group.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddGroupComponent } from './admin/admin-add-group/admin-add-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListGroupComponent,
    AdminListGroupComponent,
    AdminLoginComponent,
    AdminAddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
