import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  addCustomerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    price: new FormGroup({
      currency: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    })
  });

  customerList: any[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.addCustomerForm);

    this.customerService.addCustomer(this.addCustomerForm.value);
    this.updateCustomerList();
  }

  public updateCustomerList(): void {
    this.customerList = this.customerService.getList();
  }

}
