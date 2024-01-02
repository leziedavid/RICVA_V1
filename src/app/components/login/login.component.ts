import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) {}

    message="";
  logIn(email: string, password: string) {
    
    if(email.length && password.length){
      this.authService.logInWithEmailAndPassword(email, password);
    }else{
      this.message="Tous les champs sont obligatoires";
    }
  
  }

  logInWithGoogle() {
    this.authService.logInWithGoogleProvider();
  }
}
