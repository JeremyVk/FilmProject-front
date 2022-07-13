import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilmProject-front';
  router: string;
  jwt: string|null = null 

  constructor(private _router: Router){
    this.router = this._router.url
}

ngOnInit(): void {
  this.checkJwt()
}

ngAfterViewChecked() {
  this.checkJwt()
}


checkJwt() {
  this.jwt = localStorage.getItem('jwt');
}


}
