import { NgModule } from '@angular/core';
import { NbButtonModule, NbCalendarModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbMenuModule, NbProgressBarModule, NbSelectModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ClientModule } from './client/client.module';
import { CommandeModule } from './commande/commande.module';
import { FactureModule } from './facture/facture.module';
import { BookModule } from './book/book.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbSelectModule,
    CKEditorModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbCalendarModule,
    NbToggleModule,
    NbProgressBarModule,
    NbTabsetModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    BookModule,
    ClientModule,
    CommandeModule,
    FactureModule,
    
  ],
  declarations: [
    PagesComponent,
  ],
  exports : [
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbSelectModule,
    CKEditorModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbCalendarModule,
    NbToggleModule,
    NbProgressBarModule,
    NbTabsetModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class PagesModule {
}
