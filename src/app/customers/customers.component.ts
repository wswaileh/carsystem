import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  
  doneLoading = false;

  customers: any[];
  constructor(private toastr: ToastrService, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.doneLoading = true;
    });
  }

  deleteCustomer(id){
    this.customerService.deleteCustomer(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully')
      this.ngOnInit()
    });
  }

}
