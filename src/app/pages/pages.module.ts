import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HologramasComponent } from './hologramas/hologramas.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [HologramasComponent, LoginComponent, UsuariosComponent, PedidosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
