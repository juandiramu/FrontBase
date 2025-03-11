import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './users/create/create-user/create-user.component';
import {UserListComponent} from './users/list/user-list/user-list.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {path: 'createUser', component : CreateUserComponent},
  {path: 'listUser', component : UserListComponent}
]

