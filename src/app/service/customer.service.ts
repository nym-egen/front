import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  private customerList: any[] = [];

  constructor() {
  }

  public addCustomer(customer: any): void {
    this.customerList.push(customer);
  }

  public getList(): Array<any> {
    return this.customerList;
  }

}
