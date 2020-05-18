import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  link: string = "https://cors-anywhere.herokuapp.com/https://myrcb0lxuh.execute-api.eu-central-1.amazonaws.com/BZU10Customers/bzu10customers";
  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<any[]>(this.link);
  }

  getCustomer(id){
    return this.http.get<any>(this.link + "/" + id);
  }
  
  deleteCustomer(id){
    return this.http.delete(this.link + "/" + id);
  }

  addCustomer(Customer){
    return this.http.post(this.link,Customer);
  }

  editCustomer(id, newCustomer){
    return this.http.put(this.link+"/"+id, newCustomer);
  }

}
