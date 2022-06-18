import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
book : Book
  constructor(private toastrService:NbToastrService,
    private router : Router, 
    public windowRef: NbWindowRef,
    private bookService : BookService
) { }

  ngOnInit(): void {
    this.book = new Book();
  }


  fermer()
{
  this.windowRef.close();
}

onAddBook()
{
  this.bookService.addBook(this.book)
  this.windowRef.close();
  this.router.navigateByUrl('/', { skipLocationChange: false }).then(() =>
  this.router.navigate(['/pages/bookList']));
  this.toastrService.success("Saved","Book Added") ;

}

}
