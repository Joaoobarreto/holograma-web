import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from 'src/app/models/pedido.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPedidos();
  }

  getUsuarioPorPedido() {
    this.pedidos.map(pedido => {
      this.http.get<Usuario>(`https://holograma.azurewebsites.net/usuario/${pedido.usuarioId}`).subscribe((data: Usuario) => {
        pedido.usuario = data;
      });
    })
  }

  getPedidos() {
    const url = 'https://holograma.azurewebsites.net/pedido';

    this.http.get<any[]>(url).subscribe(data => {
      this.pedidos = data;
      this.getUsuarioPorPedido()
    });
  }
}
