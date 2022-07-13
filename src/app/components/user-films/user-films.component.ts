import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-films',
  templateUrl: './user-films.component.html',
  styleUrls: ['./user-films.component.css']
})
export class UserFilmsComponent implements OnInit {

  films: Array<Film> = []
  user: User = {}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserFilms()
  
  }

  getUserFilms() {
    this.user = JSON.parse(localStorage.getItem('user') ?? '')[0]
    console.log(this.user.id)
    this.userService.getUserFilmsById(this.user).subscribe(res => {
    this.films = res
    })
  }

}
