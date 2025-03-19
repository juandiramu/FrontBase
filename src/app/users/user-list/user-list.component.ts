import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../shared/domain/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(private readonly userService: UserService, private readonly router : Router) {
    this.users$ = this.userService.getUsers();
  }

  goToCreateUser() {
    this.router.navigate(['/create']);
  }

  deleteUser(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.users$ = this.userService.getUsers();
      }, error => {
        console.error('Error eliminando usuario:', error);
        alert('No se pudo eliminar el usuario.');
      });
    }
  }
  editUser(id: string) {
    this.router.navigate([`/edit/${id}`]); // Redirigir a la página de edición
  }

}

