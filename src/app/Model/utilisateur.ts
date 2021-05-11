import {Photos} from './photos';
import {Commentaires} from './commentaires';
export class Utilisateur {
  constructor(
    public  id_utilisateur=0,
    public  nom='',
    public  prenom='',
    public  datedenaissance='',
    public  email='',
    public  ville='',
    public  adresse='',
    public  numerotelephone=0,
    public  metier='',
    public  description='',
    public  photo='',
    public  motdepasse='',
    public  score=0,
    public  Photos: Photos[] = [],
    public  Commentaires: Commentaires[] = [],
  ){}
}
