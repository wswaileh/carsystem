import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {

  customerId: string;
  customerName: string;
  customerPhone: string;
  AssuranceType: string;


  constructor(private customerService: CustomersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.customerService.addCustomer({
      customerPhone: form.value['customerPhone'],
      customerName: form.value['customerName'],
      AssuranceType: form.value['AssuranceType'],
      customerId: form.value['customerId']
    }).subscribe(res => {
      this.toastr.success('Added Successfully!');
      form.reset();
    });
  }
}
