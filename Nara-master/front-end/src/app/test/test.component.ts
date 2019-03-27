import { Component, OnInit } from '@angular/core';
import { IDemandeconge } from '../demandeconge/demandeconge.interface';
import { DemandecongeService } from '../demandeconge/demandeconge.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  newDemande: IDemandeconge = {id_collab: 0, id_demande_conge: null, date_debut: new Date(), date_fin: null, motif_refus: "", debut_matin: null, duree: null, fin_aprem: null, type_demande_conge: null, status_conge: 'attCds'};

  constructor(private demandecongeService: DemandecongeService) { }

  ngOnInit() {
  }

  createDemande()
  {
    //while(true){
  
    this.newDemande.id_collab = 5;
    this.newDemande.id_demande_conge = 1000;
    this.newDemande.date_debut = new Date();
    this.newDemande.date_fin = new Date();
    this.newDemande.motif_refus = "Motif refus";
    this.newDemande.debut_matin = true;
    this.newDemande.duree = 1;
    this.newDemande.fin_aprem = true;
    this.newDemande.type_demande_conge = "RTT"
    this.newDemande.status_conge = 'attCds';

    this.demandecongeService.createDemandeconges(this.newDemande);

    console.log("created");

    this.newDemande.id_collab = 5;
    this.newDemande.id_demande_conge = 1000;
    this.newDemande.date_debut = new Date();
    this.newDemande.date_fin = new Date();
    this.newDemande.motif_refus = "Motif refus";
    this.newDemande.debut_matin = true;
    this.newDemande.duree = 1;
    this.newDemande.fin_aprem = true;
    this.newDemande.type_demande_conge = "RTT"
    this.newDemande.status_conge = 'attCds';

    this.demandecongeService.createDemandeconges(this.newDemande);

    console.log("created");
    //}   
  }

  
  
}
