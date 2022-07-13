import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Film } from '../interfaces/film';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  film: Film = {}

  url: string = 'http://127.0.0.1:8000/api/films';
  constructor(private http: HttpClient) { }

  getAllFilms() {
    return this.http.get<{'hydra:member': Array<Film>}>(this.url).pipe(map( elt =>
      elt['hydra:member']
      ))
  }

  findFilmById(filmId: any) {
    return this.http.get<Film>(`${this.url}/${filmId}`)
  }

  addUser(user: User, film: Film) {
    return this.http.put<Film>(`${this.url}/${film.id}`, film)
  }
}
