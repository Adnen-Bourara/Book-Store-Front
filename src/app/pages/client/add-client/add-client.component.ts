import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { BookService } from '../../book/book.service';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
client: Client
  constructor(private toastrService:NbToastrService,
    private router : Router, 
    public windowRef: NbWindowRef,
    private clientService : ClientService
  
) { }

  ngOnInit(): void {
    this.client = new Client();
  }


  fermer()
{
  this.windowRef.close();
}

onAddBook()
{
  this.clientService.addclient(this.client)
  this.windowRef.close();
  this.router.navigateByUrl('/', { skipLocationChange: false }).then(() =>
  this.router.navigate(['/pages/client']));
  this.toastrService.success("Saved","Client Added") ;

}

}
