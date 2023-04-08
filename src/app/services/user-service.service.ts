import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserResponse } from '../responses/UsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private addVoucherURL :string= 'http://localhost:8080/voucher';
  

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/admin/users';
  }

  public findAll(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
