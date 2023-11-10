import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/core/auth/services/usuario.service';
import { TokenUsuario } from '../../login/models/token.view-model';
import { TemaService } from 'src/app/core/services/tema.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private temaService: TemaService,
  ) { }

  usuarioLogado$?: Observable<TokenUsuario | null>;

  alterarTema$?: Observable<string>;

  ngOnInit() {
    this.usuarioLogado$ = this.usuarioService.usuarioLogado()

    this.alterarTema$ = this.temaService.temaAlterado()

  }

}
