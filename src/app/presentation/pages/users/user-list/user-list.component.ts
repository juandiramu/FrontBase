import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../../core/domain/entities/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserRepositoryImpl } from '../../../../infrastructure/repositories/user.repository';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users$: Observable<UserEntity[]>;

  constructor(private readonly userRepository: UserRepositoryImpl, private readonly router : Router) {
    this.users$ = this.userRepository.getUsers();
  }

  goToCreateUser() {
    this.router.navigate(['/create']);
  }

  deleteUser(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.userRepository.deleteUser(id).subscribe(() => {
        this.users$ = this.userRepository.getUsers();
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

