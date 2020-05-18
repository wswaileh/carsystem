import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { order } from '../models/order';
import { CarService } from '../services/car.service';
import { CustomersService } from '../services/customers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  doneLoading = false;
  booking: any;
  bookings: order[] = [];
  constructor(private toastr: ToastrService,private bookingService: BookingService, private carService: CarService, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((bookingss) => {
      this.booking = bookingss;
      (this.booking as Array<any>).forEach(book => {
        this.carService.getCar(book.car_id).subscribe(car => {
          this.customerService.getCustomer(book.customer_id).subscribe(customer => {
            this.bookings.push({
              bookingId: book.booking_id,
              carName: car != null ? car.carName : '--',
              customerName: customer != null ? customer.customerName : '--' ,
              fromDate: book.from_date,
              toDate: book.to_date
            })
            this.doneLoading = true;
          })

        })
      });
    })
  }
  
  deleteBooking(id){
    this.bookingService.deleteBooking(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully')
      this.ngOnInit()
    });
  }




}
