import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userName:string = 'Absolut Smirnoff'
  userNickName:string = '@absSmir'


  constructor(private router: Router) {}

  ngOnInit() {
  }
  navigateToMain(){
    this.router.navigate(['/main']);
  }
}
