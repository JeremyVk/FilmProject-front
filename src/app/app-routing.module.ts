import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserFilmsComponent } from './components/user-films/user-films.component';
import { UserComponent } from './components/user/user.component';
import { LoggedGuard } from './guards/logged.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [LoggedGuard]},
  {path: 'films', component: FilmComponent, canActivate: [LoginGuard]},
  {path: 'mes-films', component: UserFilmsComponent, canActivate: [LoginGuard]},
  {path: 'signIn', component: SignInComponent, canActivate: [LoggedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
