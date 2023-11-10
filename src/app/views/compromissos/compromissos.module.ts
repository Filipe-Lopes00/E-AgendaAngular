import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListarCompromissosComponent } from './listar-compromissos/listar-compromissos.component';
import { InserirCompromissoComponent } from './inserir-compromisso/inserir-compromisso.component';
import { EditarCompromissoComponent } from './editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir-compromisso/excluir-compromisso.component';
import { DetalhesCompromissoComponent } from './detalhes-compromisso/detalhes-compromisso.component';
import { FormularioCompromissoComponent } from './componentes/formulario-compromisso/formulario-compromisso.component';
import { CardCompromissoComponent } from './componentes/card-compromisso/card-compromisso.component';
import { CompromissosRouterModule } from './router-module/compromissos.router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompromissoService } from './service/compromisso.service';
import { ContatoService } from '../contatos/service/contato.service';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [
    ListarCompromissosComponent,
    InserirCompromissoComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent,
    DetalhesCompromissoComponent,
    FormularioCompromissoComponent,
    CardCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissosRouterModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    ContatoService,
    CompromissoService,
    DatePipe
  ]
})
export class CompromissosModule { }
