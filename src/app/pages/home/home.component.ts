import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { Holograma } from 'src/app/models/holograma.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hologramas: Holograma[] = data.hologramas;

  constructor() { }

  ngOnInit(): void {
  }

}
