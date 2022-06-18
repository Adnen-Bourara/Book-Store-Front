import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = AppComponent.gatewayURL +'/bookstore-commande-service/commande'

  constructor(protected httpclient: HttpClient) { }

 
  async GetAllCommandes() {
    return this.httpclient.get<Commande[]>(this.url+"/All").toPromise();
  }

  async deleteCommande(id:number) {
    return this.httpclient.delete(this.url+"/"+id).toPromise();
  }

  async addCommande(commande:Commande) {
    return this.httpclient.post(this.url,commande).toPromise();
  }

}
