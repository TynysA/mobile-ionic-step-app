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
    // Replace the following lines with your actual login and password verification logic
    const validUsername = 'user';
    const validPassword = 'user';

    if (this.username === validUsername && this.password === validPassword) {
      // Successful login
      console.log('Login successful');
      // Redirect to another page (e.g., home page)
      this.router.navigate(['/main']);
    } else {
      // Invalid login
      console.log('Invalid login credentials');
      // You can show an error message to the user if needed
    }
  }
}
