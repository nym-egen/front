import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './customer/customer-add/customer-add.component';
import {ItemAddComponent} from "./item/item-add/item-add.component";
import {ItemListComponent} from "./item/item-list/item-list.component";
import {PiChartComponent} from "./power-bi/pi-chart/pi-chart.component";
import {FilterTableComponent} from "./power-bi/filter-table/filter-table.component";
import {TableComponent} from "./power-bi/table/table.component";
import {SomchOpdPrescriptionComponent} from "./power-bi/somch-opd-prescription/somch-opd-prescription.component";
import {OpdAppointmentReportComponent} from "./power-bi/opd-appointment-report/opd-appointment-report.component";
import {OpdTicketReportComponent} from "./power-bi/opd-ticket-report/opd-ticket-report.component";

const routes: Routes = [

  {path: 'pi-chart', component: PiChartComponent},
  {path: 'filter-table', component: FilterTableComponent},
  {path: 'table', component: TableComponent},
  {path: 'opd-prescription', component: SomchOpdPrescriptionComponent},
  {path: '', component: OpdAppointmentReportComponent},
  {path: 'opd-ticket-report', component: OpdTicketReportComponent},


  {path: 'customer-list', component: CustomerListComponent},
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
