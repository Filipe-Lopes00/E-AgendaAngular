import { Component, OnInit } from '@angular/core';
import { VisualizarContatoViewModel } from '../models/visualizar-contato.view-model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato?: VisualizarContatoViewModel

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contato = this.route.snapshot.data['contato']

  }
  voltar() { }
}
