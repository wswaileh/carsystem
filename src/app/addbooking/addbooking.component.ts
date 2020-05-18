import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.scss']
})
export class AddbookingComponent implements OnInit {

  bookingId: string;
  carId: string;
  customerId: string;
  fromdate: string;
  todate: string;


  constructor(private bookingService: BookingService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.bookingService.addBooking({
      booking_id: form.value['bookingId'],
      customer_id: form.value['customerId'],
      car_id: form.value['carId'],
      from_date: form.value['fromdate'],
      to_date: form.value['todate'],
    }).subscribe(res => {
      this.toastr.success('Added Successfully!');
      form.reset();
    });
  }

}
