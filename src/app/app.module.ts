import './extensions/form-group.extension';
import './extensions/http-error-response.extension';

import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemaService } from 'src/app/core/services/tema.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorToken } from './core/auth/interceptor/httpTokenInteceptor';
import { UsuarioService } from './core/auth/services/usuario.service';
import { CoreModule } from './core/core.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { interceptorLoading } from './shared/loading/interceptor-loading';
import { LoadingService } from './shared/loading/loading.service';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


export function logarUsuarioSalvoFactory(usuarioService: UsuarioService) {
  return () => usuarioService.logarUsuarioSalvo()
}

export function atribuirTemaUsuarioFactory(temaService: TemaService) {
  return () => temaService.aplicarTemaUsuario()
}

const locale = 'pt-BR'
registerLocaleData(localePt, locale);



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AppMaterialModule,
    DashboardModule


  ],
  providers: [

    {
      provide: APP_INITIALIZER,
      useFactory: logarUsuarioSalvoFactory,
      deps: [UsuarioService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: atribuirTemaUsuarioFactory,
      deps: [TemaService],
      multi: true
    },
    {
      provide: LOCALE_ID, useValue: locale
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000,color:'primary' }
    },
    provideHttpClient(withInterceptors([interceptorToken, interceptorLoading])),

    LoadingService,
    TemaService],

  bootstrap: [AppComponent]
})
export class AppModule { }
