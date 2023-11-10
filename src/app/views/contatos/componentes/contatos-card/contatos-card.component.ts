import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ListarContatosViewModel } from '../../models/listar-contato.view-model';

@Component({
  selector: 'app-contatos-card',
  templateUrl: './contatos-card.component.html',
  styleUrls: ['./contatos-card.component.scss']
})
export class ContatosCardComponent implements OnInit {

  ngOnInit(): void {
    this.favorito = this.contato?.favorito!
  }

  favorito!: boolean

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input() contato?: ListarContatosViewModel

  @Output() onExcluirContato = new EventEmitter<ListarContatosViewModel>()

  @Output() onEditarContato = new EventEmitter<ListarContatosViewModel>()

  @Output() onFavoritarContato = new EventEmitter<ListarContatosViewModel>()

  @Output() onDetalhesContato = new EventEmitter<ListarContatosViewModel>()

  editar(contato: ListarContatosViewModel) {
    this.onEditarContato.emit(contato)
  }

  excluir(contato: ListarContatosViewModel) {
    this.onExcluirContato.emit(contato)
  }

  favoritar(contato: ListarContatosViewModel) {
    this.favorito = !this.contato!.favorito
    this.onFavoritarContato.emit(contato)
  }

  detalhes(contato: ListarContatosViewModel) {
    this.onDetalhesContato.emit(contato)
  }
}
