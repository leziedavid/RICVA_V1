import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepotsService } from 'src/app/shared/services/entrepots.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-entrepots',
  templateUrl: './entrepots.component.html',
  styleUrls: ['./entrepots.component.css']
})
export class  EntrepotsComponent implements OnInit {
  ListeEntrepots!: any[];
  constructor(
    private datas:EntrepotsService,
    private router: Router, 
    private fb: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    ){}  

    ngOnInit(): void {
         this.getListeEntrepots();
      /** spinner starts on init */
          this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 1000);
    }
  getListeEntrepots(){
    this.datas.getEntrepots().subscribe((result) => {
      console.log(result)
      this.ListeEntrepots = result
    })
  } 

  onEdit(donnees: any){
    this.datas.EntrepotsForm  =  this.fb.group({
      _id: [donnees.id],
      libelle: [donnees.libelle, Validators.required],
      longtude: [donnees.longtude , Validators.required],
      superficie: [donnees.superficie , Validators.required],
      latitude: [donnees.latitude , Validators.required],
      place: [donnees.place , Validators.required]

    })
     this.router.navigateByUrl('/create-entrepots');
  } 

  onShow(donnees: any){
    this.datas.EntrepotsForm  =  this.fb.group({
      _id: [donnees.id],
      libelle: [donnees.libelle, Validators.required],
      longtude: [donnees.longtude , Validators.required],
      superficie: [donnees.superficie , Validators.required],
      latitude: [donnees.latitude , Validators.required],
      place: [donnees.place , Validators.required]

    })
     this.router.navigateByUrl('/show-entrepots');
  } 


  onDelete(id: any) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Ce processus est irréversible.',
        // icon: 'warning',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Nom',
      }).then((result) => {

        if (result.value) {

          this.datas.deleteEntrepots(id).then(() => {

            Swal.fire('Removed!', 'Entrepot supprimé avec succès.', 'success');
            console.log('updated Successfully')
    
            }).catch((err) => {
    
              console.log(err)
    
            })

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Annulé', 'Entrepot toujours dans la base de données.', 'error');
        }

      });

      this.getListeEntrepots()

    }
    
  logOut() {
      this.authService.logOut();
    }

}
