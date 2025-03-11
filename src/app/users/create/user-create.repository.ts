import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreateDTO } from './user-create.dto';

@Injectable({
  providedIn: 'root'
})
export class UserCreateRepository {
  private apiUrl = 'https://localhost:7021/api/User/create';

  constructor(private http: HttpClient) {}

  createUser(user: UserCreateDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
