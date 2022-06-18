import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { ListCommandeComponent } from './commande/list-commande/list-commande.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component'
import { ListClientComponent } from './client/list-client/list-client.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'bookList',
      component: ListBookComponent,
    },

    {
      path: 'client',
      component: ListClientComponent,
    },

    {
      path: 'commande',
      component: ListCommandeComponent,
    },

    {
      path: 'facture',
      component: ListFactureComponent,
    },

    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'bookList',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
