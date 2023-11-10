import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { FormContatosViewModel } from '../models/form-contato-view-model';
import { ContatoService } from '../service/contato.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {
  contato!: FormContatosViewModel

  idSelecionado?: string

  constructor(private route: ActivatedRoute, private service: ContatoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id')!
    this.route.data.pipe(map((dados => dados['contato'])))
      .subscribe({
        error: (err: HttpErrorResponse) => this.snack.open(err.message, 'Erro!'),
        next: (res: any) => this.contato = res
      })
  }

  editarContato(contato: FormContatosViewModel) {
    this.contato = contato
    this.service.editar(this.idSelecionado!, this.contato).subscribe({
      error: (err: HttpErrorResponse) => this.snack.open(err.message, 'Erro!'),
      next: () => {
        this.snack.open('Contato Editado Com Sucesso!', 'Sucesso!'),
          this.router.navigate(['/contatos/listar'])
      }
    })
  }
}
