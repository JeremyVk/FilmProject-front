import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Film } from '../interfaces/film';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://127.0.0.1:8000/api/users'
  constructor(private http: HttpClient) { }


  getUserByEmail(userEmail: string | undefined) {
      return this.http.get<{'hydra:member': Array<User>}>(`${this.url}?email=${userEmail}`).pipe(map (elt  => 
        elt['hydra:member']
      ))
  } 

  updateUser(user: User) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  getUserFilmsById(user: User) {
    return this.http.get<{'hydra:member': Array<Film>}>(`${this.url}/${user.id}/films`).pipe(map(elt =>
      elt['hydra:member']
    ))
  }

  getUserById(id: number)
  {
    return this.http.get<User>(`${this.url}/${id}`)
  }
}
