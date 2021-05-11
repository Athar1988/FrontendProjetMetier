import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscriptionComponent} from './utilisateur/inscription/inscription.component';
import {AccueilComponent} from './menu/accueil/accueil.component';


const routes: Routes = [
  {path:'' , component:AccueilComponent},
  {path:"inscription" , component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
