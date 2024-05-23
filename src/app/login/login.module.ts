import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

import {MatIconModule} from "@angular/material/icon";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule,
    MatIconModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}