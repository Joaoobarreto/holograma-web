import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HologramasComponent } from './hologramas/hologramas.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { EditarHologramasComponent } from './editar-hologramas/editar-hologramas.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'hologramas',
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'hologramas',
      component: HologramasComponent,
    },
    {
      path: 'hologramas/editar/:id',
      component: EditarHologramasComponent,
    },
    {
      path: 'usuarios',
      component: UsuariosComponent,
    },
    {
      path: 'pedidos',
      component: PedidosComponent,
    },
    {
      path: 'orcamentos',
      component: OrcamentosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
