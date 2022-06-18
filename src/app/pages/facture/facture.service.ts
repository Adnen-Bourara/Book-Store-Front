import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';


@Injectable({
  providedIn: 'root'
})
export class FactureService {

  url = AppComponent.gatewayURL +'facture_server/books'

  constructor() { }
}
