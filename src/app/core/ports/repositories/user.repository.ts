import { Observable } from 'rxjs';
import { UserEntity } from '../../domain/entities/user.entity';

export interface UserRepository {
  getUsers(): Observable<UserEntity[]>;
  getUserById(id: string): Observable<UserEntity>;
  createUser(user: UserEntity): Observable<void>;
  updateUser(user: UserEntity): Observable<void>;
  deleteUser(id: string): Observable<void>;
}
