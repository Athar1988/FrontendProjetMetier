import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from '../../Model/utilisateur';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
