import { Component, OnInit } from '@angular/core';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';
import {Utilisateur} from '../../Model/utilisateur';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  description='';
  nom='';
  prenom='';
  date='';
  email='';
  ville='';
  adresse='';
  telephone='';
  metier='';
  user: Utilisateur;
  listEmail: any;
  emailInitial="";

  public trouve=false;
  constructor(
    private serviceUser:TouslesutilisateurService,
    private toaster: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  verifierEmail(value: any) {
    this.serviceUser.recupereLesEmail().subscribe(
      (data)=>{
        this.listEmail=data;
        for(let i of this.listEmail._embedded.utilisateurs){
          if(i==value){
this.email=" ";          }
        }
      }
    )
  }

  ajoutUser(utilisateur: Utilisateur): void {
    utilisateur.photo="avartar.jpg";
    this.serviceUser.addUser(utilisateur).subscribe(
      (newUser) => {
        this.toaster.success(`Le cv de ${utilisateur.nom} ${utilisateur.prenom} a été ajuoté avec succès`);
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(`Problème avec le serveur veuillez contacter l'admin`);
      }
    );
  }



}
