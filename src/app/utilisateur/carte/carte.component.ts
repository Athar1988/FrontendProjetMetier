import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from '../../Model/utilisateur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() user: Utilisateur;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  profilArtisan(user: Utilisateur) {
    this.router.navigate(['profil',user]);
  }
}
