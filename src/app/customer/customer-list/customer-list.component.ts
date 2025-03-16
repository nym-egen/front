import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerSearchPageList: any[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.searchPageList()
  }

  public searchPageList(): void {
    this.customerService.searchPageList(1, 1).subscribe(data => {
      this.customerSearchPageList = data.sort((a: { id: number; }, b: { id: number; })=>a.id-b.id);
    });
  }
}
