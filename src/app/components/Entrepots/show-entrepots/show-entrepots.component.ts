import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EntrepotsService } from 'src/app/shared/services/entrepots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-entrepots',
  templateUrl: './show-entrepots.component.html',
  styleUrls: ['./show-entrepots.component.css']
})

export class ShowEntrepotsComponent {

constructor (
  public datas: EntrepotsService, 
  private authService: AuthService,
  private router: Router) {}

onSubmit(){

  // this.router.navigate(['/entrepots']);
  
if(this.datas.EntrepotsForm.value._id == ''){
  this.datas.addEntrepots(this.datas.EntrepotsForm.value);
}
else{
  this.datas.onEdit(this.datas.EntrepotsForm.value)
}
  this.router.navigate(['/entrepots']);
  this.datas.EntrepotsForm.reset();
  
}

get f(){
  return this.datas.EntrepotsForm.controls;
}


logOut() {
  this.authService.logOut();
}

}
