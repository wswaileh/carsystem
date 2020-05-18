import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carId: number;
  carModel: number;
  carName: number;
  carPrice: number;

  constructor(private carService: CarService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.carService.addCar({
      carModel: form.value['carModel'],
      carId: form.value['carId'],
      carPrice: form.value['carPrice'],
      carName: form.value['carName']
    }).subscribe(res => {
      this.toastr.success('Added Successfully!');
      form.reset();
    });
  }
}
