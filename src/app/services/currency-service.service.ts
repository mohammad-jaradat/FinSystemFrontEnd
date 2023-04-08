import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserResponse } from '../responses/UsersResponse';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private usersUrl: string; 
  private currencyApiURL :string= 'http://localhost:8080/api/v1/currency/currencies';
  

  constructor(private http: HttpClient) {
    this.usersUrl = this.currencyApiURL;
  }

  public findAll(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.usersUrl);
  }

  public save(user: Currency) {
    return this.http.post<Currency>(this.usersUrl, user);
  }
}
