import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}

  message="";
  signUp(email: string, password: string) {

    if(email.length && password.length){

      this.authService.signUpWithEmailAndPassword(email, password);
    }else{
      this.message="Tous les champs sont obligatoires";
    }

   
  }
}
