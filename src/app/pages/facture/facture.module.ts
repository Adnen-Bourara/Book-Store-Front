import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { AddFactureComponent } from './add-facture/add-facture.component';



@NgModule({
  declarations: [ListFactureComponent, AddFactureComponent],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
