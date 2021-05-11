import {Component, Input, OnInit} from '@angular/core';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';
import {Utilisateur} from '../../Model/utilisateur';

@Component({
  selector: 'app-tous-user',
  templateUrl: './tous-user.component.html',
  styleUrls: ['./tous-user.component.css']
})
export class TousUserComponent implements OnInit {
//utilisateurs :Utilisateur[]=[];
  utilisateurs :any;


  constructor(private serviceUser:TouslesutilisateurService) { }

  ngOnInit(): void {
    this.getTousUser();
  }

  private getTousUser(){
    this.serviceUser.getTousUser("/utilisateurs")
      .subscribe(
        data=>{this.utilisateurs=data, console.log(this.utilisateurs)},
        err=> {console.log(err);}
      );
  }
}
