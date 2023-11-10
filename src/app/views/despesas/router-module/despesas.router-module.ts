import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioAutenticadoGuard } from 'src/app/core/auth/guards/usuario-autenticado.guard';

import { listarCategoriasResolve } from '../../categorias/router-module/resolvers-categorias';
import { DetalhesDespesaComponent } from '../detalhes-despesa/detalhes-despesa.component';
import { EditarDespesaComponent } from '../editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from '../excluir-despesa/excluir-despesa.component';
import { InserirDespesaComponent } from '../inserir-despesa/inserir-despesa.component';
import { ListarDespesasComponent } from '../listar-despesas/listar-despesas.component';
import {
  selecionarDespesasPorId,
  selecionarTodasDespesasResolve,
  visualizarDespesaCompletaResolve,
} from './resolver-despesas';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
    },
    {
        path: 'inserir',
        component: InserirDespesaComponent,
        resolve: { 'categorias': listarCategoriasResolve },
        canActivate: [usuarioAutenticadoGuard]
    },
    {
        path: 'listar',
        component: ListarDespesasComponent,
        resolve: { 'despesas': selecionarTodasDespesasResolve },
        canActivate: [usuarioAutenticadoGuard]
    },
    {
        path: 'editar/:id',
        component: EditarDespesaComponent,
        resolve: { 'despesa': selecionarDespesasPorId, 'categorias': listarCategoriasResolve },
        canActivate: [usuarioAutenticadoGuard]
    },
    {
        path: 'detalhes/:id',
        component: DetalhesDespesaComponent,
        resolve: { 'despesa': visualizarDespesaCompletaResolve},
        canActivate: [usuarioAutenticadoGuard]
    },
    {
        path: 'excluir/:id',
        component: ExcluirDespesaComponent,
        resolve: { 'despesa': visualizarDespesaCompletaResolve},
        canActivate: [usuarioAutenticadoGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class DespesasRouteModule {

}
