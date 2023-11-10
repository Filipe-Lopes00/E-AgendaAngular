import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { DetalhesDespesaComponent } from './detalhes-despesa/detalhes-despesa.component';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from './excluir-despesa/excluir-despesa.component';
import { InserirDespesaComponent } from './inserir-despesa/inserir-despesa.component';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { DespesasRouteModule } from './router-module/despesas.router-module';
import { DespesasService } from './service/despesas.service';



@NgModule({
  declarations: [
    ListarDespesasComponent,
    EditarDespesaComponent,
    InserirDespesaComponent,
    ExcluirDespesaComponent,
    DetalhesDespesaComponent
  ],
  imports: [
    CommonModule,
    DespesasRouteModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers:[
    DespesasService
  ]
})
export class DespesasModule { }
