import { Observable } from 'rxjs';
import { UserEntity } from '../../domain/entities/user.model';
import { CreateUserDto } from '../../domain/entities/create.user';
import { EditUserDto } from '../../domain/entities/edit.user';

export interface UserRepository {
  getUsers(): Observable<UserEntity[]>;
  getUserById(id: string): Observable<UserEntity>;
  createUser(user: CreateUserDto): Observable<UserEntity>;
  updateUser(user: EditUserDto): Observable<UserEntity>;
  deleteUser(id: string): Observable<void>;
}
