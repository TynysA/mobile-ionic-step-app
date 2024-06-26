import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  stepCountStarted = false

  constructor(private router: Router) {}

  ngOnInit() {
  }
  navigateToUser(){
    this.router.navigate(['/user']);
  }

  startStepCount(){
    this.stepCountStarted = true;
  }
  stopStepCount(){
    this.stepCountStarted = false;
  }

}
