import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string ='http://127.0.0.1:8000/authentication_token';

  
  constructor(private http: HttpClient) { }


  login(user: User) {
    return this.http.post<{ token: string }>(this.url, user);
  }
}
