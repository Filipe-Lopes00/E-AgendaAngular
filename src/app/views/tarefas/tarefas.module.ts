import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { DetalhesTarefaComponent } from './detalhes-tarefa/detalhes-tarefa.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { ExcluirTarefaComponent } from './excluir-tarefa/excluir-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefasRouterModule } from './router-module/tarefa.router-module';
import { ReactiveFormsModule } from '@angular/forms';
import { TarefasService } from './service/tarefas.service';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    DetalhesTarefaComponent,
    InserirTarefaComponent,
    ExcluirTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRouterModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    TarefasService,

  ]
})
export class TarefasModule { }
