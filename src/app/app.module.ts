import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerAddComponent} from './customer/customer-add/customer-add.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {RouterModule} from '@angular/router';
import {ItemAddComponent} from './item/item-add/item-add.component';
import {ItemListComponent} from './item/item-list/item-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerService} from "./service/customer.service";
import {HttpClientModule} from "@angular/common/http";
import { PiChartComponent } from './power-bi/pi-chart/pi-chart.component';
import { FilterTableComponent } from './power-bi/filter-table/filter-table.component';
import { TableComponent } from './power-bi/table/table.component';
import { SomchOpdPrescriptionComponent } from './power-bi/somch-opd-prescription/somch-opd-prescription.component';
import { OpdAppointmentReportComponent } from './power-bi/opd-appointment-report/opd-appointment-report.component';
import { OpdTicketReportComponent } from './power-bi/opd-ticket-report/opd-ticket-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ItemAddComponent,
    ItemListComponent,
    PiChartComponent,
    FilterTableComponent,
    TableComponent,
    SomchOpdPrescriptionComponent,
    OpdAppointmentReportComponent,
    OpdTicketReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
