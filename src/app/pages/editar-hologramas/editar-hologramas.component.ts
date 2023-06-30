import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Holograma } from 'src/app/models/holograma.model';

@Component({
  selector: 'app-editar-hologramas',
  templateUrl: './editar-hologramas.component.html',
  styleUrls: ['./editar-hologramas.component.css']
})
export class EditarHologramasComponent implements OnInit {
  holograma: any;
  categorias: {id: number, descricao: string}[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getHolograma();
    this.getCategorias();
  }

  getHolograma(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `https://holograma.azurewebsites.net/holograma/${id}`;

    this.http.get<any>(url).subscribe(
      data => {
        this.holograma = data;
      },
      error => {
        if (error.status === 404) {
          this.holograma = {
            id: 0,
            descricao: "",
            img: "",
            valor: 0,
            categoria: "",
            quantidade: 0,
            categoriaId: 0,
            ativo: false,
          };
        }
      }
    );
  }

  getCategorias(): void {
    const url = 'https://holograma.azurewebsites.net/categoria';

    this.http.get<any[]>(url).subscribe(data => {
      this.categorias = data;
    });
  }

  salvarHolograma(): void {
    debugger;
    let url = 'https://holograma.azurewebsites.net/holograma/inserir';
    let method = 'POST';

    if (this.holograma?.id) {
      url = 'https://holograma.azurewebsites.net/holograma/atualizar';
      method = 'PUT';
    }

    this.http.request('POST', url, { body: this.holograma }).subscribe(
      data => {
        this.router.navigate(['hologramas'])
      },
      error => {
        // Lógica para tratar erros durante a solicitação
      }
    );
  }
}
