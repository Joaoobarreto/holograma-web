import { Pedido } from './../../models/pedido.model';
import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = data.pedidos

  constructor() { }

  ngOnInit(): void {
  }

}
