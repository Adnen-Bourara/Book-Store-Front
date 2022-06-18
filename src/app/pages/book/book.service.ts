import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = AppComponent.gatewayURL +'bookstore-book-service/books'

  constructor(protected httpclient: HttpClient) { }

 
  async GetAllBooks() {
    return this.httpclient.get<Book[]>(this.url+"/GetAll").toPromise();
  }

  async GetBookById(id:number) {
    return this.httpclient.get<Book>(this.url+"/GetById/"+id).toPromise();
  }

  async deleteBook(id:number) {
    return this.httpclient.delete(this.url+"/Delete/"+id).toPromise();
  }

  async addBook(book:Book) {
    return this.httpclient.post(this.url+"/Create",book).toPromise();
  }



}
