import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =  {};
  error: string = '';

  constructor(private loginService: LoginService, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
  }

  connexion() {
    this.loginService.login(this.user).subscribe({
      next: (res) => {        
        if (res.token != null) {
          localStorage.setItem('jwt', res.token);
          this.userService.getUserByEmail(this.user.email).subscribe(res => {
          console.log(res)
          localStorage.setItem('user', JSON.stringify(res))
          })
          this.router.navigateByUrl('/films');
        }
      },
      error: (res) => {

        this.error = 'nfeirofnere';
      },
    });
  }


}
