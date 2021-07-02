import { Component, OnInit } from '@angular/core';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';

@Component({
  selector: 'app-user-recent',
  templateUrl: './user-recent.component.html',
  styleUrls: ['./user-recent.component.css']
})
export class UserRecentComponent implements OnInit {
//utilisateurs :Utilisateur[]=[];
  utilisateurs :any;


  constructor(private serviceUser:TouslesutilisateurService) { }

  ngOnInit(): void {
    this.getTousUser();
  }

  private getTousUser(){
    //changer le service par un service qui retourne les 10 derniers artisans
    this.serviceUser.getTousUser("")
      .subscribe(
        data=>{this.utilisateurs=data, console.log(this.utilisateurs)},
        err=> {console.log(err);}
      );
  }
}
