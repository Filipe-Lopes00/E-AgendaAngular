import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { ListarContatosViewModel } from '../models/listar-contato.view-model';
import { StatusFavorito } from '../models/status-favorito.enum';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {
  contatos?: ListarContatosViewModel[]

  opcaoSelecionada: StatusFavorito = StatusFavorito.Todos

  opcoesFiltro: any[] = []

  constructor(private router: Router, private route: ActivatedRoute, private service: ContatoService, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.route.data.pipe(map((dados) => dados['contatos']))
      .subscribe({
        error: (err: HttpErrorResponse) => this.snack.open(err.message, 'Erro'),
        next: (dados) => {
          this.contatos = dados
          if (this.contatos?.length == 0)
            this.snack.open('Nenhum contato cadastrado até o momento')
        }
      })
  }

  public editar(contato: ListarContatosViewModel) {
    this.router.navigate(['/contatos/editar', contato.id])
  }

  public excluir(contato: ListarContatosViewModel) {
    this.router.navigate(['/contatos/excluir', contato.id])
  }

  public detalhes(contato: ListarContatosViewModel) {
    this.router.navigate(['/contatos/detalhes', contato.id])
  }

  public alterarFavorito(contato: any) {
    contato.favorito = !contato.favorito;

    this.service.alterarFavorito(contato.id, contato)
      .subscribe({
        error: (erro) => this.snack.open(erro.message),
        next: (res: any) => {
          let status = res.dados.favorito == true ? 'adicionado aos' : 'removido dos';
          this.snack.open(`Contato ${status} favoritos`, 'Sucesso');
        }
      }).add(() => {
        if (this.opcaoSelecionada == StatusFavorito.Favoritos) {
          const index = this.contatos?.findIndex(x => x.id === contato.id)!;
          this.contatos?.splice(index, 1);
        }
      })
  }

  filtrar(event: any) {
    this.contatos = []
    this.opcaoSelecionada = event.index!;

    this.service.selecionarTodos(this.opcaoSelecionada)
      .subscribe({
        error: (erro: HttpErrorResponse) => this.snack.open(erro.message, 'Erro!'),
        next: (dados) => {
          this.contatos = dados

          if (this.contatos?.length == 0 && this.opcaoSelecionada == StatusFavorito.Favoritos)
            this.snack.open('Nenhum contato favorito até o momento')

          else if (this.contatos?.length == 0 && this.opcaoSelecionada == StatusFavorito.Todos)
            this.snack.open('Nenhum contato cadastrado até o momento')
        }
      })
  }




}

