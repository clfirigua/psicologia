import { Component, OnInit } from '@angular/core';
import { Generos, tiposangre } from '../../interfaces/usuarios.interface';
import { DataserviceService } from '../../services/dataservice.service';

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
  telefono:number = 0;
  direccion:string = "";
  correo:string = "";
  identificacion:number = 0;
  calendario:string = "";
  genero:any = [];
  rol:any = [];
  tiposangres:any =[];
  tiposangre:any;
  usuarios:any = []
  constructor(public dta:DataserviceService) { }

  ngOnInit(): void {
    this.dta.getuser().subscribe(cusuarios=>{
      this.usuarios = cusuarios
    });

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
  //TODO falta el editar y eliminar los datos de los usuarios

  guardar(){
     this.dta.createuser({
      nombre: this.nombre,
      apellido:this.apellido,
      telefono:this.telefono,
      direccion:this.direccion,
      correo:this.correo,
      identificacion:this.identificacion,
      rh:this.tiposangre.name,
      genero:this.genero.name
     })
  }
}
