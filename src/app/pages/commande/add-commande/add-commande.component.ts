import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent implements OnInit {
  commande: Commande
  constructor(private toastrService:NbToastrService,
    private router : Router, 
    public windowRef: NbWindowRef,
    private commandeService : CommandeService 
  
) { }

  ngOnInit(): void {
    this.commande = new Commande();
  }


  fermer()
{
  this.windowRef.close();
}

onAddBook()
{
  this.commandeService.addCommande(this.commande)
  this.windowRef.close();
  this.router.navigateByUrl('/', { skipLocationChange: false }).then(() =>
  this.router.navigate(['/pages/commande']));
  this.toastrService.success("Saved","commande Added") ;

}

}
