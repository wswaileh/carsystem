import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerId: string;
  customerName: string;
  customerPhone: string;
  AssuranceType: string;

  doneLoading: boolean = false;

  constructor(private route: ActivatedRoute,private customerService: CustomersService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    this.customerService.getCustomer(this.customerId).subscribe((customer)=>{
      this.customerName = customer.customerName;
      this.AssuranceType = customer.customerAssuranceType;
      this.customerPhone = customer.customerPhone;
      this.doneLoading = true;
    });
  }

  onSubmit(form: NgForm) {
    this.customerService.editCustomer(form.value['customerId'],{
      customerPhone: form.value['customerPhone'],
      customerName: form.value['customerName'],
      AssuranceType: form.value['AssuranceType'],
      customerId: form.value['customerId']
    }).subscribe(res => {
      this.toastr.success('Modified Successfully!');
      form.reset();
    });
  }

}
