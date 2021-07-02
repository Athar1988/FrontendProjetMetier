import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Utilisateur} from '../../Model/utilisateur';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
id_utilisateur: number;
  utilisateur:any;
  constructor(private route: ActivatedRoute,
              private serviceUser:TouslesutilisateurService) { }

  ngOnInit(): void {

this.route.params.subscribe(params => {
        this.id_utilisateur=params['profil'];
        console.log(this.id_utilisateur);
        this.serviceUser.profilUtilisateur("/"+this.id_utilisateur).subscribe(
          data=>{this.utilisateur=data,
            console.log(this.utilisateur)},
          err=> {console.log(err);}
        )
      },
      err=>{
        console.log("probleme d'affcihage");
      });
  }

}
