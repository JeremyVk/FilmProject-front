import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  // film: Film = {};
  films: Array<Film> = [];
  film: Film = {};
  user: User = {};
  constructor(private filmService: FilmService, private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.initFilm();
  }

  initFilm() {
    this.filmService.getAllFilms().subscribe(res => {
      console.log(res)
      this.films = res;
    })
  }

  addFilmToUser(filmId: any) {
      this.filmService.findFilmById(filmId).subscribe(res => {
        let userString = localStorage.getItem('user') ?? '';
        let userId = JSON.parse(userString)[0].id;
        let film = res

        this.userService.getUserById(userId).subscribe(data => {
          this.user = data
          console.log(this.user)

          let uri = `/api/films/${film.id}`
          this.user.films?.push(uri)
  
          this.userService.updateUser(this.user).subscribe(res => {
  
          })
        });
       
       
       
    })

    
    // this.filmService.addFilm(this.film).subscribe(res => {
    //   console.log(res)
    // })
    // this.filmService.addFilm(filmId)
  }
}
