import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cformulario',
  templateUrl: './cformulario.component.html',
  styleUrls: ['./cformulario.component.css']
})
export class CformularioComponent implements OnInit {

  pregunta:string = "";
  tipoPregunta:any = [];
  preguntaDepende:any  = [];
  preguntas:any = [];
  constructor() { }

  add() {
    this.preguntas.push({value: 'gsre'});
  }
  ngOnInit(): void {
    this.tipoPregunta = [
      {name: 'Seleccion unica', code: 'Seleccion unica'},
      {name: 'Seleccion multiple', code: 'Seleccion multiple'},
    ]
    this.preguntaDepende = [
      {name: 'pregunta 1', code: 'pregunta 1'},
      {name: 'pregunta 2', code: 'pregunta 2'}
    ]
    
  }

}
