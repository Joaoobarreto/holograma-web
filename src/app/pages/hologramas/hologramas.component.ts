import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { Holograma } from 'src/app/models/holograma.model';

@Component({
  selector: 'app-hologramas',
  templateUrl: './hologramas.component.html',
  styleUrls: ['./hologramas.component.css']
})
export class HologramasComponent implements OnInit {
  hologramas: Holograma[] = data.hologramas;

  constructor() { }

  ngOnInit(): void {
  }

}
