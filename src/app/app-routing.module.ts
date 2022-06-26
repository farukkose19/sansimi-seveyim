import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {AdminAddGroupComponent} from "./admin/admin-add-group/admin-add-group.component";
import {UserListGroupComponent} from "./user/user-list-group/user-list-group.component";
import {UserLuckyLukeComponent} from "./user/user-lucky-luke/user-lucky-luke.component";

const routes: Routes = [
  { path: '', component: UserListGroupComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-add-group', component: AdminAddGroupComponent },
  { path: 'user-lucky-luke/:id', component: UserLuckyLukeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
