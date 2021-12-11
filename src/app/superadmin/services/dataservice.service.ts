import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  usersCollection:AngularFirestoreCollection<Usuarios>;
  usuarios:Observable<Usuarios[]>;
  usuarioDoc!: AngularFirestoreDocument<Usuarios>;
    constructor( public firestore: AngularFirestore) {
    // this.usuarios = firestore.collection<Usuarios>('Usuarios').valueChanges();
    this.usersCollection = this.firestore.collection('Usuarios', ref => ref.where('estado', '==', 'activo'));
    this.usuarios = this.usersCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(
        a=>{
          const data = a.payload.doc.data() as Usuarios;
          data.id = a.payload.doc.id;
          return data
        }
      )
    }))
   }
  getuser(){
    return  this.usuarios
  }
  getiduser(user:number){
    let data = this.firestore.collection<Usuarios>('Usuarios', ref => ref.where('identificacion', '==', user)).valueChanges();
    data.subscribe(cdatos =>{
      console.log(cdatos)
    })
  }
  createuser(user:Usuarios){
    this.usersCollection.add(user);
  }
  suspender(){

  }
  edituser(user:Usuarios){
    this.usuarioDoc = this.firestore.doc(`Usuarios/${user.id}`);
    this.usuarioDoc.update(user);
  }
  eliminar(){

  }
}
