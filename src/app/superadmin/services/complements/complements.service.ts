import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplementsService {

  generos:object[] = [
    {name: 'Masculino', code: 'Masculino'},
    {name: 'Femenino', code: 'Femenino'},
  ];

  rh:object[] = [
    {name:'O-',code:'O-'},
    {name:'O+',code:'O+'},
    {name:'A-',code:'A-'},
    {name:'A+',code:'A+'},
    {name:'B-',code:'B-'},
    {name:'B+',code:'B+'},
    {name:'AB+',code:'AB-'}
  ]

  constructor() { }

  getGeneros (){
    return this.generos;
  }
  
  getRh (){
    return this.rh;
  }

  
}
