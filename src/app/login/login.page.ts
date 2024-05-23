import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username?: string;
  password?: string;

  constructor(private router: Router) {}
  login() {
    const validUsername = 'user';
    const validPassword = 'user';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/main']);
    } else {
      console.log('Invalid login credentials');
    }
  }
  reg(){
        this.router.navigate(['/login/reg']);
  }
}
