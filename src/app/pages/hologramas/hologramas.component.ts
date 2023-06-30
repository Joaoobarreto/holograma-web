import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Holograma } from 'src/app/models/holograma.model';

@Component({
  selector: 'app-holograma',
  templateUrl: './hologramas.component.html',
  styleUrls: ['./hologramas.component.css']
})
export class HologramasComponent implements OnInit {
  hologramas: Holograma[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHologramas();
  }

  gerarImagemParaHolograma (hologramas: Holograma[]) {
    return hologramas.map((holo) => {
      if (holo.descricao?.includes("Bulbassauro")) {
        holo.img = "../../../assets/img/BulbasaurWireframe.png";
      } else if (holo.descricao?.includes("Homem de Ferro")) {
        holo.img = "../../../assets/img/IronMan_WireFrame.png";
      } else if (holo.descricao?.includes("Darth Vader")) {
        holo.img = "../../../assets/img/Darth_Vader_Holo.png";
      } else if (holo.descricao?.includes("Escudo Capitão América")) {
        holo.img = "../../../assets/img/Captain_America_Shield.png";
      } else if (holo.descricao?.includes("Suzanne")) {
        holo.img = "../../../assets/img/Suzanne_1.png";
      } else if (holo.descricao?.includes("Pikachu")) {
        holo.img = "../../../assets/img/pikachu_wireframe.png";
      }
      return holo;
    });
  };

  setCategoriasHologramas(holos: Holograma[]) {
    const categorias = ["filmes","séries","anime","games","celebridades","esportes"];

    for (const holograma of holos) {
      if(holograma.categoriaId)
      if (holograma.categoriaId in categorias) {
        holograma.categoria = categorias[holograma.categoriaId - 1] as string;
      }
    }
  }

  getHologramas() {
    const url = 'https://holograma.azurewebsites.net/holograma';

    this.http.get<any[]>(url).subscribe(data => {
      this.hologramas = data;
      this.setCategoriasHologramas(this.hologramas)
      this.gerarImagemParaHolograma(this.hologramas)
    });
  }
}
