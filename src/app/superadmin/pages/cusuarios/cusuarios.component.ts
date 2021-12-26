import { Component, OnInit } from '@angular/core';
import { Generos } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styleUrls: ['./cusuarios.component.css', '/cusuarios.component.sass']

})
export class CusuariosComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    this.generos = [
      {name: 'Masculino', code: 'Masculino'},
      {name: 'Femenino', code: 'Femenino'},
    ]
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
  ];
  }

}
