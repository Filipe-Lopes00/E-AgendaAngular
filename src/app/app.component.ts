import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './core/auth/services/usuario.service';
import { Observable } from 'rxjs';
import { TokenUsuario } from './views/login/models/token.view-model';
import { TemaService } from './core/services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'eAgendaWeb';

  constructor(
    private usuarioService: UsuarioService,
    private temaService: TemaService) { }

  usuarioLogado$!: Observable<TokenUsuario | null>;


  ngOnInit(): void {
    this.usuarioLogado$ = this.usuarioService.usuarioLogado()

  }

  toggleTheme() {

    this.temaService.alterarTema();
  }

}
