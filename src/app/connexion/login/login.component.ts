import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';
import {Utilisateur} from '../../Model/utilisateur';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';
import {Photos} from '../../Model/photos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 FB: any;
 email:'';
 token:'';
 photo:'';
  listeEmail:any;
 public authenticated :boolean;
 public utilisateurconnecter;
  constructor(private toaster: ToastrService,
              private router: Router,
              public serviceLogin:LoginServiceService,
              private userService:TouslesutilisateurService) { }

  ngOnInit(): void {

    (window as any).fbAsyncInit = function() {
      this.FB.init({
        appId      : '3934190919962224',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      this.FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }


  //https://github.com/abacritt/angularx-social-login/issues/119
  identifierFacebook(){
    window['FB'].login((response) => {
      console.log('login response',response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'name,email,picture,first_name,last_name'
        }, (userInfo) => {

          console.log("user information");
          console.log(userInfo);
          console.log(userInfo.picture.data.url);
          this.email=userInfo.email;
          this.photo=userInfo.picture.data.url;
          this.token=userInfo.id;
          //****************
          this.authenticated=true;
          this.utilisateurconnecter= new Utilisateur(null, userInfo.first_name, userInfo.last_name, null,
            userInfo.email,null,null,null,null,null,userInfo.picture.data.url,null,null,null,null);


          console.log(this.utilisateurconnecter+" eeee");
          /** Verifier l'existance du l'utilisateur qui est connecté par fb
           * si n'existe pas il faut le sauvgarder
           */
          /* récuperer liste des emails*/
          this.userService.recupereLesEmail().subscribe(
            (data)=>{this.listeEmail=data;  console.log(data+" ap");},
            (error)=>{console.log(error);}
          )
          /*comparer email utilisateur par la liste des email dans la BD*/
          this.userService.verifierEmailService(userInfo.email)
          if(this.userService.mailexiste!=true){
            this.userService.addUser(this.utilisateurconnecter);
            console.log(this.utilisateurconnecter+" apres enregister");
          }

          localStorage.setItem("authenticatedUser",JSON.stringify(this.utilisateurconnecter));
          this.router.navigateByUrl('');


        });

      } else {
        console.log('User login failed');
      }
    }, {scope: 'email'});
  }


  identifieGoogle() {

  }

  login(credentials){
  this.serviceLogin.login(credentials);
      //
  }

  ajouterCompte(){
    this.router.navigate(['inscription']);
  }
}
