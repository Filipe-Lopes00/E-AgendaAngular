import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DetalhesCategoriaComponent } from './detalhes-categoria/detalhes-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { CategoriasRouterModule } from './router-module/categorias.router-module';
import { CategoriaService } from './service/categoria.service';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [
    ListarCategoriasComponent,
    InserirCategoriaComponent,
    ExcluirCategoriaComponent,
    EditarCategoriaComponent,
    DetalhesCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRouterModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],

  providers: [
    CategoriaService,

  ]
})
export class CategoriasModule { }
