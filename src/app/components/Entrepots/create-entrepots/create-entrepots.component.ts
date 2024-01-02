import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EntrepotsService } from 'src/app/shared/services/entrepots.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-entrepots',
  templateUrl: './create-entrepots.component.html',
  styleUrls: ['./create-entrepots.component.css']
})
export class CreateEntrepotsComponent {

 departments = [ 'Angular', 'Java Developer','Finance'];
 messages = "";

constructor (
  public datas: EntrepotsService, 
  private authService: AuthService,
  private router: Router) {}

onSubmit(){

  // this.router.navigate(['/entrepots']);
 if(
    this.datas.EntrepotsForm.value.libelle?.length && 
    this.datas.EntrepotsForm.value.longtude &&
    this.datas.EntrepotsForm.value.superficie &&
    this.datas.EntrepotsForm.value.latitude &&
    this.datas.EntrepotsForm.value.place?.length
    ){

  if(this.datas.EntrepotsForm.value._id == ''){
    this.datas.addEntrepots(this.datas.EntrepotsForm.value);
  }
  else{
    this.datas.onEdit(this.datas.EntrepotsForm.value)
  }
  // this.router.navigateByUrl('/entrepots')
    this.router.navigate(['/entrepots']);
    this.datas.EntrepotsForm.reset();

 }else{

  this.messages="Tous les champs sont obligatoires";

 }
 

  
}

get f(){
  return this.datas.EntrepotsForm.controls;
}


logOut() {
  this.authService.logOut();
}

  
}
