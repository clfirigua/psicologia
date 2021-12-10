import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  usersCollection:AngularFirestoreCollection<Usuarios>;
  usuarios:Observable<Usuarios[]>;
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
  getdatos(){
    return  this.usuarios
  }
}
