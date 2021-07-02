import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css']
})
export class NavbarrComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inscriptionArtisan() {
    this.router.navigate(['/inscription']);
  }

  connexion() {
    this.router.navigate(['login']);
  }

  listeArtisan() {
    this.router.navigate(['listeArtisan']);
  }

  inscriptionClient() {

  }

}
