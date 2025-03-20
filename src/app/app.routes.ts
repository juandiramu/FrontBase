import { Routes } from '@angular/router';
import { CreateUserComponent } from './presentation/pages/users/create-user/create-user.component';
import { UserListComponent } from './presentation/pages/users/user-list/user-list.component';
import { EditUserComponent } from './presentation/pages/users/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'list', component: UserListComponent },
  {path: 'edit/:id', component: EditUserComponent}
];
