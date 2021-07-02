import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../Model/utilisateur';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TouslesutilisateurService {
  //variable pour tester existance du email
  public host:string="http://localhost:8085/utilisateurs";
  public listEmail:any;
  public mailexiste;
  constructor(private httpclient:HttpClient,
              private toaster: ToastrService) { }

     getTousUser(url){
   return  this.httpclient.get(this.host+url);
     }


    addUser(user: Utilisateur): Observable<Utilisateur> {
    console.log(user);
    return this.httpclient.post<Utilisateur>(this.host+"/AjouteUser", user);
     }


    recupereLesEmail(){
    return this.httpclient.get("http://localhost:8085/utilisateurs?projection=email");
     }


  //Verifier si l'adresse mail existe déjà il faut etre unique
  verifierEmailService(email) {

    this.recupereLesEmail().subscribe(
      (data)=>{
        this.listEmail=data;
        for(let i of this.listEmail._embedded.utilisateurs){
          if(i.email==email){
            this.mailexiste=true;
          }
        }
      },
      (error) => {console.log(error)}
    )

  }

    uploadPhotoProduit(f: File, idProduct): Observable<HttpEvent<{}>> {
    //methode du angular pour telecharger un fichier
    let formdata: FormData=new FormData();
    formdata.append('file',f);
    const req=new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduct,formdata,{
      reportProgress:true,
      responseType:'text'
    } );
    return this.httpclient.request(req);
     }


     profilUtilisateur(url){
     return this.httpclient.get(this.host+url);
     }

}
