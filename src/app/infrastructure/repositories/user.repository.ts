import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserEntity } from '../../core/domain/entities/user.model';
import { CreateUserDto } from '../../core/domain/entities/create.user';
import { EditUserDto } from '../../core/domain/entities/edit.user';
import { UserRepository } from '../../core/ports/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository{
  private readonly apiUrl = 'https://localhost:7021/api/User';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserEntity[]> {
    return this.http
      .get<{ data: UserEntity[] }>(`${this.apiUrl}/GetAll`)
      .pipe(map((response) => response.data));
  }

  createUser(user: CreateUserDto): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${this.apiUrl}/Create`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Delete`, {
      params: { Id: id },
    });
  }
  getUserById(id: string): Observable<UserEntity> {
    return this.http
      .get<{ data: UserEntity }>(`${this.apiUrl}/GetById`, { params: { Id: id } })
      .pipe(
        map((response) => response.data)
      );
  }

  updateUser(user: EditUserDto): Observable<UserEntity> {
    return this.http.put<UserEntity>(`${this.apiUrl}/Edit`, user);
  }
}
