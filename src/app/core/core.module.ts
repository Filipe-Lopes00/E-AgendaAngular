import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { UsuarioService } from './auth/services/usuario.service';
import { AuthModule } from './auth/auth.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TemaService } from './services/tema.service';


@NgModule({
  declarations: [
    ToolBarComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    AuthModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  exports: [
    ToolBarComponent,

  ],
  providers: [
    UsuarioService,
    TemaService
  ]
})
export class CoreModule { }
