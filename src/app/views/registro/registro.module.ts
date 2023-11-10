import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';



@NgModule({
  declarations: [
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class RegistroModule { }
