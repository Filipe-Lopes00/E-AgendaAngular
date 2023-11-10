import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '../services/localStorage.service';
import { UsuarioService } from '../services/usuario.service';


export const interceptorToken: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

  if (!inject(UsuarioService).tokenValido()) {

    return next(request);
  }

  const token = inject(LocalStorageService).obterUsuarioLogado().chave

  const req = request.clone({

    headers: request.headers.set('Authorization', `Bearer ${token}`),
  })

  return next(req);
}

