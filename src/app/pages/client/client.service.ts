import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = AppComponent.gatewayURL +'bookstore-client-service/client'

  constructor(protected httpclient: HttpClient) { }

 
  async GetAllClients() {
    return this.httpclient.get<Client[]>(this.url+"/GetAll").toPromise();
  }

  async deleteclient(id:number) {
    return this.httpclient.delete(this.url+"/Delete/"+id).toPromise();
  }

  async addclient(client:Client) {
    return this.httpclient.post(this.url+"/Create",client).toPromise();
  }

}
