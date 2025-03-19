import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService {

  private url: string = "http://localhost:8080/api/v1/customers";

  constructor(private http: HttpClient) {
  }

  public addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.url}/create`, customer, {responseType: 'text' as 'json'})
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`,{responseType: 'text' as 'json'})
  }

  public searchPageList(page: number, size: number): Observable<any> {
    return this.http.post<any>(`${this.url}/search-list`, {page, size});
  }

}
