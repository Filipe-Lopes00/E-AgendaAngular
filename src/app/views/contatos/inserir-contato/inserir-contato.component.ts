import { FormContatosViewModel } from './../models/form-contato-view-model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoService } from '../service/contato.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-contato',
  templateUrl: './inserir-contato.component.html',
  styleUrls: ['./inserir-contato.component.scss']
})
export class InserirContatoComponent {

  constructor(private contatoService: ContatoService, private snack: MatSnackBar, private router: Router) { }

  inserirContato(contato: FormContatosViewModel) {

    this.contatoService.inserir(contato)
      .subscribe({
        error: (err) => this.snack.open(err.message, 'Erro'),
        next: () => {
          this.snack.open("Contato cadastrdo com sucesso", "Sucesso")
          this.router.navigate(['/contatos/listar'])
        }
      })
  }
}
