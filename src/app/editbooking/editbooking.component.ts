import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.scss']
})
export class EditbookingComponent implements OnInit {

  bookingId: string;
  carId: string;
  customerId: string;
  fromdate: string;
  todate: string;
  
  doneLoading: boolean = false;

  constructor(private route: ActivatedRoute,private bookingService: BookingService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('bookingId');
    this.bookingService.getBooking(this.bookingId).subscribe((booking)=>{
      this.fromdate = booking.from_date;
      this.carId = booking.car_id;
      this.customerId = booking.customer_id;
      this.todate = booking.to_date;
      this.doneLoading = true;
    });
  }

  onSubmit(form: NgForm) {
    this.bookingService.editBooking(form.value['bookingId'],{
      booking_id: form.value['bookingId'],
      customer_id: form.value['customerId'],
      car_id: form.value['carId'],
      from_date: form.value['fromdate'],
      to_date: form.value['todate'],
    }).subscribe(res => {
      this.toastr.success('Modified Successfully!');
      form.reset();
    });
  }

}
