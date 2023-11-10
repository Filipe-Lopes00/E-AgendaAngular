import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/localStorage.service';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LocalStorageService, UsuarioService, AuthService]
})
export class AuthModule { }
