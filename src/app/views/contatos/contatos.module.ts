import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ContatosCardComponent } from './componentes/contatos-card/contatos-card.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { InserirContatoComponent } from './inserir-contato/inserir-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './excluir-contato/excluir-contato.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatoRouterModule } from './router-module/contatos-router.module';
import { ContatoService } from './service/contato.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';




@NgModule({
  declarations: [
    ContatosCardComponent,
    ListarContatosComponent,
    InserirContatoComponent,
    EditarContatoComponent,
    ExcluirContatoComponent,
    DetalhesContatoComponent,
    FormularioComponent,

  ],
  imports: [
    CommonModule,
    ContatoRouterModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    ContatoService
  ]
})
export class ContatosModule { }
