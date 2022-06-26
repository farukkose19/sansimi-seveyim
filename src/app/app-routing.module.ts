import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {AdminListGroupComponent} from "./admin/admin-list-group/admin-list-group.component";
import {AdminAddGroupComponent} from "./admin/admin-add-group/admin-add-group.component";
import {UserListGroupComponent} from "./user/user-list-group/user-list-group.component";

const routes: Routes = [
  { path: '', component: UserListGroupComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-list-group', component: AdminListGroupComponent },
  { path: 'admin-add-group', component: AdminAddGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
