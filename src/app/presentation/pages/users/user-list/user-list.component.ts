import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../../core/domain/entities/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserRepository } from '../../../../core/ports/repositories/user.repository';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users$: Observable<UserEntity[]>;

  constructor(private readonly userService: UserRepository, private readonly router : Router) {
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

