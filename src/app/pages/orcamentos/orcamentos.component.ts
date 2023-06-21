import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { Orcamento } from 'src/app/models/orcamento.model';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.css']
})
export class OrcamentosComponent implements OnInit {
  orcamentos: Orcamento[] = data.orcamentos

  constructor() { }

  ngOnInit(): void {
  }

}
