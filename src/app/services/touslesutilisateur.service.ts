import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../Model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TouslesutilisateurService {


  public host:string="http://localhost:8085";
  constructor(private httpclient:HttpClient) { }

  getTousUser(url){
   return  this.httpclient.get(this.host+url);
  }
  addUser(user: Utilisateur): Observable<Utilisateur> {
    console.log(user);
    return this.httpclient.post<Utilisateur>("http://localhost:8085/utilisateurs/AjouteUser", user);
  }


recupereLesEmail(){
    return this.httpclient.get("http://localhost:8085/utilisateurs?projection=email");
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

}
