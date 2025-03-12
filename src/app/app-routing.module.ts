import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './customer/customer-add/customer-add.component';
import {ItemAddComponent} from "./item/item-add/item-add.component";
import {ItemListComponent} from "./item/item-list/item-list.component";

const routes: Routes = [

  {path: '', component: CustomerListComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'item-add', component: ItemAddComponent},
  {path: 'item-list', component: ItemListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
