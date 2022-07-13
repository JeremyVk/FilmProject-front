import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User = {}
  constructor(private siginService: SigninService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.siginService.signin(this.user).subscribe(res => {
      this.router.navigateByUrl('');
    })
  }

}
