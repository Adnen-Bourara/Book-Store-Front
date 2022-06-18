import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowService } from '@nebular/theme';
import { interval, Subscription } from 'rxjs';
import { AddCommandeComponent } from '../add-commande/add-commande.component';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {
  source : any;
  private updateSubscription: Subscription;
  constructor(private windowService: NbWindowService,
    private toastrService : NbToastrService,
    private commandeService : CommandeService ) { }

  async ngOnInit() {

    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.getList()
    });
  
  
  
    }
  
  
    settings = {
      noDataMessage:"Empty",
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      pager: {
        display: true,
        perPage: 8,
      },
      actions: {
        position: 'right',
        add: false,
        edit: false,
    
      },
   
      columns: {
     
        nomClient: {
          title: 'nomClient',
          type: 'text',
        },
        type: {
          title: 'type',
          type: 'text',
        },
        adresse: {
          title: 'adresse',
          type: 'text',
        },
        nbAchat: {
          title: 'nbAchat',
          type: 'text',
        },
  
        
        
      
      },
    }
  
  
  
    openWindow() {
  
      this.windowService.open(AddCommandeComponent, {title: 'Add book'},
      );     
    }
  
  
   async getList()
    {
      this.source = await this.commandeService.GetAllCommandes();
    }
  
  
  
  
  
  
  
  
   async onDeleteConfirm(event) {
    if (window.confirm(`Are you sure you want to delete this item ?`)) {
      event.confirm.resolve( await this.commandeService.deleteCommande(event.data.id),
      this.source.filter(p => p !== event.data),
      this.toastrService.warning("Success","Commande deleted")
      );
    } else {
      event.confirm.reject();
    }
  }
  

}
