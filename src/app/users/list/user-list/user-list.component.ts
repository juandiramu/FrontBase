import { Component } from '@angular/core';
import {User} from '../../shared/domain/user.model'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [
    {
      id: '5748251e-4562-4b07-a1bd-b2d2e3ae1503',
      name: 'Juan Pérez',
      email: 'juan@gmail.com',
      number: '3234567890',
      createdDate: '2025-02-14T09:34:59.6191211',
      updateDate: null
    },
    {
      id: '12345678-1234-5678-1234-567812345678',
      name: 'Ana López',
      email: 'ana@gmail.com',
      number: '3123456789',
      createdDate: '2025-01-20T14:20:15.456121',
      updateDate: null
    }
  ];

  editUser(user: any) {
    console.log('Editar usuario:', user);
  }

  deleteUser(id: string) {
    console.log('Eliminar usuario con ID:', id);
    this.users = this.users.filter(user => user.id !== id);
  }
}
