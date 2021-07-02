import { Component, OnInit } from '@angular/core';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';
import {Utilisateur} from '../../Model/utilisateur';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';
import {Login} from '../../Model/login';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  //champs du formulaire
  description='';
  nom='';
  prenom='';
  date='';
  email='';
  ville='';
  adresse='';
  telephone='';
  metier='';
  //variable pour tester existance du email

  listEmail: any;
  //objet login
  login:Login;

  constructor(
    public serviceUser:TouslesutilisateurService,
    private toaster: ToastrService,
    private router: Router,
    private serviceLogin:LoginServiceService
    ) { }

  ngOnInit(): void {
  }


  //Verifier si l'adresse mail existe déjà il faut etre unique
  verifierEmail(value: any) {
        this.serviceUser.verifierEmailService(value);
        this.serviceUser.mailexiste=false;
  }




  //sauvgarder l'utilisateur et login dans BD
  ajoutUser(utilisateur: Utilisateur): void {
    utilisateur.photo="avartar.jpg";
    //ssauvgarde Login
    this.login=new Login(utilisateur.email,utilisateur.motdepasse,false,true);
    this.serviceLogin.addLogin(this.login).subscribe(
      (newLogin)=> {console.log(this.login)},
      (error)=>{        console.log(error);}
    )
    // sauvgarde utilisateur
    this.serviceUser.addUser(utilisateur).subscribe(
      (newUser) => {
        this.toaster.success(`Le cv de {utilisateur.nom} {utilisateur.prenom} a été ajuoté avec succès`);
        this.router.navigate(['login']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(`Problème avec le serveur veuillez contacter l'admin`);
      }
    );
  }


  resetForm(form){
    form.resetForm();
  }
}
