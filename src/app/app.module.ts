import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarrComponent } from './menu/navbarr/navbarr.component';
import { TousUserComponent } from './utilisateur/tous-user/tous-user.component';
import { ListmetierComponent } from './metier/listmetier/listmetier.component';
import { RecherchAZComponent } from './metier/recherch-az/recherch-az.component';
import {HttpClientModule} from '@angular/common/http';
import { ListeMetierComponent } from './metier/liste-metier/liste-metier.component';
import { CarteComponent } from './utilisateur/carte/carte.component';
import { AccueilComponent } from './menu/accueil/accueil.component';
import { FooterComponent } from './menu/footer/footer.component';
import { CommentaireComponent } from './utilisateur/commentaire/commentaire.component';
import { UserRecentComponent } from './utilisateur/user-recent/user-recent.component';
import {InscriptionComponent} from './utilisateur/inscription/inscription.component';
import { ModifierProfilComponent } from './utilisateur/modifier-profil/modifier-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    TousUserComponent,
    ListmetierComponent,
    RecherchAZComponent,
    ListeMetierComponent,
    CarteComponent,
    AccueilComponent,
    FooterComponent,
    CommentaireComponent,
    UserRecentComponent,
    InscriptionComponent,
    ModifierProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
