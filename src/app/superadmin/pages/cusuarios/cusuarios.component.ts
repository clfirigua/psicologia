import { Component, OnInit } from '@angular/core';
import { Generos, tiposangre } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styleUrls: ['./cusuarios.component.css']
})
export class CusuariosComponent implements OnInit {
  edit:number= 0;
  cities: any[] = [];
  generos:any = [];
  nombre:string = "";
  apellido:string = "";
  telefono:string = "";
  direccion:string = "";
  correo:string = "";
  identificacion:string = "";
  calendario:string = "";
  genero:any = [];
  rol:any = [];
  tiposangres:any =[];
  tiposangre:any;

  constructor() { }

  ngOnInit(): void {
    this.generos = [
      {name: 'Masculino', code: 'Masculino'},
      {name: 'Femenino', code: 'Femenino'},
    ];
    this.tiposangres = [
      {name:'O-',code:'O-'},
      {name:'O+',code:'O+'},
      {name:'A-',code:'A-'},
      {name:'A+',code:'A+'},
      {name:'B-',code:'B-'},
      {name:'B+',code:'B+'},
      {name:'AB+',code:'AB-'}
    ]
    // TODO: seccion de los roles de los usuarios
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
  ];
  }

}
