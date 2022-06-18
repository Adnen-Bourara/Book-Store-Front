import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowService } from '@nebular/theme';
import { interval, Subscription } from 'rxjs';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookService } from '../book.service';

@Component({
  selector: 'list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  source : any;
  private updateSubscription: Subscription;
  constructor(private windowService: NbWindowService,
    private toastrService : NbToastrService,
private bookService : BookService
) { }

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
   
      titre: {
        title: 'Title',
        type: 'text',
      },
      collection: {
        title: 'Collection',
        type: 'text',
      },
      prix: {
        title: 'Price',
        type: 'text',
      },
      quantiteStock: {
        title: 'Quantity',
        type: 'text',
      },

      
      
    
    },
  }



  openWindow() {

    this.windowService.open(AddBookComponent, {title: 'Add book'},
    );     
  }


 async getList()
  {
    this.source = await this.bookService.GetAllBooks();
  }








 async onDeleteConfirm(event) {
  if (window.confirm(`Are you sure you want to delete this item ?`)) {
    event.confirm.resolve( await this.bookService.deleteBook(event.data.id),
    this.source.filter(p => p !== event.data),
    this.toastrService.warning("Success","Client supprimé")
    );
  } else {
    event.confirm.reject();
  }
}


}
