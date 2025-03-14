import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../shared/domain/user.model';
import { CreateUserDto } from '../shared/domain/create.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'https://localhost:7021/api/User';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<{ data: User[] }>(`${this.apiUrl}/GetAll`).pipe(
      map(response => response.data) 
    );
  }

  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/Create`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Delete`, {
      params: { Id: id }
    });
  }

}
