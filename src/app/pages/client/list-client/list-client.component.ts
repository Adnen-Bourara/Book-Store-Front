import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowService } from '@nebular/theme';
import { interval, Subscription } from 'rxjs';
import { AddClientComponent } from '../add-client/add-client.component';
import { ClientService } from '../client.service';

@Component({
  selector: 'list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  source : any;
  private updateSubscription: Subscription;
  constructor(private windowService: NbWindowService,
    private toastrService : NbToastrService,
    private clientService : ClientService) { }

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
     
        cin: {
          title: 'cin',
          type: 'text',
        },
        nom: {
          title: 'nom',
          type: 'text',
        },
        prenom: {
          title: 'prenom',
          type: 'text',
        },
        mail: {
          title: 'mail',
          type: 'text',
        },
  
        
        
      
      },
    }
  
  
  
    openWindow() {
  
      this.windowService.open(AddClientComponent, {title: 'Add book'},
      );     
    }
  
  
   async getList()
    {
      this.source = await this.clientService.GetAllClients();
    }
  
  
  
  
  
  
  
  
   async onDeleteConfirm(event) {
    if (window.confirm(`Are you sure you want to delete this item ?`)) {
      event.confirm.resolve( await this.clientService.deleteclient(event.data.id),
      this.source.filter(p => p !== event.data),
      this.toastrService.warning("Success","Client deleted")
      );
    } else {
      event.confirm.reject();
    }
  }
  

}
