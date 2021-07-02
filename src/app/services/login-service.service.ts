import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Utilisateur} from '../Model/utilisateur';
import {Login} from '../Model/login';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TouslesutilisateurService} from './touslesutilisateur.service';
import {ToastrService} from 'ngx-toastr';
const API_LOGIN = 'http://localhost:8085/logins';
@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {
  tousLogin:any;
  public authenticated :boolean;
  public utilisateurconnecter;
  mailexiste:any;
  public host:string="http://localhost:8085/logins";
  constructor(private httpclient:HttpClient,
              private router:Router,
              private toaster: ToastrService
              ) { }

  //ajouter login en cas d'inscription
  addLogin(login: Login): Observable<Login> {
    console.log(login);
    return this.httpclient.post<Login>(this.host+"/AjouteLogin", login);
  }

  login(credentials){
    this.httpclient.get(API_LOGIN).subscribe(
      (data)=>{
        this.tousLogin=data;
        let loginactuel;
for(let i=0 ; i< this.tousLogin._embedded.logins.length; i++){
  if(this.tousLogin._embedded.logins[i].email==credentials.email && this.tousLogin._embedded.logins[i].motdepasse==credentials.motdepasse){
    loginactuel=this.tousLogin._embedded.logins[i];
  }
  else{

    this.mailexiste=false;
    console.log("utilisateur n'existe pas");
  }
}

        if(loginactuel){
         //toster
          this.authenticated=true;
          this.utilisateurconnecter=loginactuel;
          localStorage.setItem("authenticatedUser",JSON.stringify(this.utilisateurconnecter));
          this.router.navigateByUrl('');
          this.toaster.success('Bienvenu');
        }
        else {
         // this.msgerruer="erreur d'authentification, repeter une autre fois";
          this.authenticated=false;
          this.router.navigateByUrl('/login');
        }



      }
    )
  }



}
