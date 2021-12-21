import { Component, OnInit } from '@angular/core';
import { generos, Generos, tiposangre, Usuarios } from '../../interfaces/usuarios.interface';
import { ComplementsService } from '../../services/complements/complements.service';
import { DataserviceService } from '../../services/usuarios/dataservice.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styleUrls: ['./cusuarios.component.css'],
  providers: [MessageService]
})
export class CusuariosComponent implements OnInit {
  edit:number= 0;
  cities: any[] = [];
  generos:any = [];
  genero:any = [];
  rol:any = [];
  tiposangres:any =[];
  tiposangre:any;
  usuarios:any = []

  usuario:Usuarios = {
    nombre: '',
    apellido:'',
    telefono:'',
    direccion:'',
    correo:'',
    identificacion:'',
    rh:tiposangre.abne,
    genero:generos.mascu,
    estado:'activo',
    fnacimiento:''
  }
  constructor(public dta:DataserviceService, public complementos:ComplementsService, private toast: MessageService, private activatedRoute:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
  
    console.log(this.activatedRoute.params)
    this.dta.getuser().subscribe(cusuarios=>  this.usuarios = cusuarios );
    this.generos = this.complementos.getGeneros();
    this.tiposangres = this.complementos.getRh()
    // TODO: seccion de los roles de los usuarios
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
    ];
    if(!this.route.url.includes('editusuarios')){
    return
    }
    this.edit = 1
    this.activatedRoute.params
    .pipe(
    switchMap(({id})=> this.dta.getiduser(id))
    )
    .subscribe(usuario=> this.usuario = usuario[0],)
  }

  guardar(){
    if(this.validaDatos(this.usuario)){
      this.dta.createuser(this.usuario);
      this.notificacion('success','Usuario guardado');
      this.usuario = {
        nombre: '',
        apellido:'',
        telefono:'',
        direccion:'',
        correo:'',
        identificacion:'',
        rh:tiposangre.abne,
        genero:generos.mascu,
        estado:'activo',
        fnacimiento:''
      }
    }

  }

  validaDatos(usuario:Usuarios){
    if(usuario.nombre.length == 0){
      this.notificacion('error','Ingresa un nombre valido');
      return false
    }else if(usuario.apellido.length == 0){
      this.notificacion('error','Ingresa un apeliido valido');
      return false
    }else if(usuario.telefono.length == 0 || usuario.telefono.length < 10){
      this.notificacion('error','Ingresa un numero de telefono valido');
      return false
    }else if(usuario.direccion.length == 0){
      this.notificacion('error','Ingresa una direccion valido');
      return false
    }else if(usuario.correo.length == 0 || !usuario.correo.includes('@')){
      this.notificacion('error','Ingresa un correo valido');
      return false
    }else if(usuario.identificacion.length == 0 ){
      this.notificacion('error','Ingresa una identificacion valida');
      return false
    }
    return true
  }

  notificacion(tipo:string, cuerpo:string){
    this.toast.add({key: 'myKey1', severity:tipo, summary: cuerpo});
  }
}
