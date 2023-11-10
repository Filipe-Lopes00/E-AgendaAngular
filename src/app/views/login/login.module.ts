import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { LoginComponent } from './login/login.component';
import { LoginRouterModule } from './router-module/login.router-module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRouterModule
  ]
})
export class LoginModule { }
