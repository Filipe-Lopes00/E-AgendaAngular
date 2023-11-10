import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TemaService {

  renderer: Renderer2

  mudarTemaSubject = new BehaviorSubject<Tema>('light-theme')

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  temaAlterado() {
    return this.mudarTemaSubject.asObservable()
  }

  aplicarTemaUsuario() {
    const tema = this.obterTemaUsuario()

    if (tema) {
      document.documentElement.className = tema

      this.mudarTemaSubject.next(tema!)
    }
  }


  carregarTemaPadrao() {
    if (document.documentElement.className == 'dark-theme')
      this.renderer.removeClass(document.documentElement, 'dark-theme');

    this.mudarTemaSubject.next('light-theme')

  }

  alterarTema() {
    let tema: Tema = document.documentElement.className as Tema

    if (tema)
      this.renderer.removeClass(document.documentElement, tema);
    else
      tema = 'light-theme'

    tema = tema == 'light-theme' ? 'dark-theme' : 'light-theme'

    this.renderer.addClass(document.documentElement, tema);

    this.salvarTemaUsuario(tema)

    this.mudarTemaSubject.next(tema)
  }


  public removerTemaUsuario() {
    localStorage.removeItem('temaEAgenda')
    this.mudarTemaSubject.next('light-theme')
  }

  private salvarTemaUsuario(tema: Tema) {
    localStorage.setItem('temaEAgenda', JSON.stringify(tema))
  }


  private obterTemaUsuario(): Tema | null {
    const tema = localStorage.getItem('temaEAgenda')

    return tema ? JSON.parse(tema) : null
  }




}

type Tema = 'light-theme' | 'dark-theme'
