import { Component, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TouslesutilisateurService} from '../../services/touslesutilisateur.service';
@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {
  private selectedFile;
  private progress: number;
  private currentFileUpload: any;
  private currentTime: number=0;
  private currentProduit: any;
  selectedFiles;//pour recuperer la route
  constructor(private serviceUser:TouslesutilisateurService) { }

  ngOnInit(): void {
  }



  onSelectFile(event) {
    this.selectedFile=event.target.files;
    console.log(this.selectedFile);
  }


  envoyerFichier() {
    this.progress=0;
    //le fichier courant c'est le fichier de item (0) dans la liste des fichiers selectionnées  event.target.files
    this.currentFileUpload=this.selectedFile.item(0);
    // appler le service qui permet de faire une opération upload
    this.serviceUser.uploadPhotoProduit(this.currentFileUpload, this.currentProduit.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.currentTime=Date.now();
      }
    },err=>{
      alert("Problème de chargement");
    })
    this.selectedFiles = undefined
  }
}
