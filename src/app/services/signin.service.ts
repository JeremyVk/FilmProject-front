import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  url: string = 'http://127.0.0.1:8000/api/users'
  constructor(private http: HttpClient) { }

  signin(user: User) {
    return this.http.post(this.url, user)
  }
}
