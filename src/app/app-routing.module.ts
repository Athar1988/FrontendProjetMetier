import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscriptionComponent} from './utilisateur/inscription/inscription.component';
import {AccueilComponent} from './menu/accueil/accueil.component';
import {LoginComponent} from './connexion/login/login.component';
import {TousUserComponent} from './utilisateur/tous-user/tous-user.component';
import {ProfilComponent} from './utilisateur/profil/profil.component';


const routes: Routes = [
  {path:'' , component:AccueilComponent},
  {path:"inscription" , component:InscriptionComponent},
  {path:"login" , component:LoginComponent} ,
  {path:"listeArtisan" , component:TousUserComponent},
  {path:"profil/:profil" , component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
