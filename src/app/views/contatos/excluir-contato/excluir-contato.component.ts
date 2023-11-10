import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, map } from 'rxjs';

import { VisualizarContatoViewModel } from '../models/visualizar-contato.view-model';
import { ContatoService } from '../service/contato.service';
import { TemaService } from 'src/app/core/services/tema.service';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styleUrls: ['./excluir-contato.component.scss']
})
export class ExcluirContatoComponent  implements OnInit {
  contato?: VisualizarContatoViewModel

  tema$!:Observable<string>

  constructor(
    private service: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar,
    private temaService:TemaService) { }

  ngOnInit(): void {

this.tema$ = this.temaService.temaAlterado()

    this.route.data.pipe(map((dados => dados['contato'])))
      .subscribe({
        error: (err: HttpErrorResponse) => this.snack.open(err.message, 'Erro!'),
        next: (res: any) => this.contato = res
      })
  }


  excluirContato() {
    this.service.excluir(this.contato!.id)
      .subscribe({
        error: (err: HttpErrorResponse) => this.snack.open(err.message, 'Erro!'),
        next: () => {
          this.snack.open('Contato excluído com sucesso', 'Sucesso')
          this.router.navigate(['contatos/listar'])
        }
      })
  }
}
