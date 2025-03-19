import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerSearchPageList: any[] = [];

  addCustomerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.searchPageList()
  }

  submitForm(): void {
    this.customerService.addCustomer(this.addCustomerForm.value).subscribe(value => {
      console.log(value)
      this.searchPageList();
    });
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(value => {
      console.log(value)
      this.searchPageList();
    });
  }

  public searchPageList(): void {
    this.customerService.searchPageList(1, 1).subscribe(data => {
      this.customerSearchPageList = data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
    });
  }

}
