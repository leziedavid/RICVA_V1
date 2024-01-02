import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntrepotsService {

  constructor(
    private fb: FormBuilder, 
    private firestore: Firestore, 
    private router: Router,) { }

  EntrepotsForm = this.fb.group({
    _id: [''],
    libelle: ['', Validators.required],
    longtude: ['', Validators.required],
    superficie: ['', Validators.required],
    latitude: ['' , Validators.required],
    place: ['', Validators.required]
  })

  addEntrepots(donnees: any){
  let firebaseRef = collection(this.firestore , 'tablesEntrepots');
  return addDoc(firebaseRef , donnees)
    }

  getEntrepots(){
    let firebaseRef = collection(this.firestore , 'tablesEntrepots');
    return collectionData(firebaseRef , {idField: 'id'})
  }
  onEdit(donnees: any){
    let docRef = doc(this.firestore , `tablesEntrepots/${donnees._id}`);
    return updateDoc(docRef , donnees)

  }

  deleteEntrepots(id: any){
    let docRef = doc(this.firestore , `tablesEntrepots/${id}`);
    return deleteDoc(docRef)
  }

}