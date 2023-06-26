import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HologramasComponent } from './hologramas/hologramas.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { EditarHologramasComponent } from './editar-hologramas/editar-hologramas.component';



@NgModule({
  declarations: [HologramasComponent, LoginComponent, UsuariosComponent, PedidosComponent, OrcamentosComponent, EditarHologramasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
