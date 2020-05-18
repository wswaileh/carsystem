import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.scss']
})
export class EditcarComponent implements OnInit {

  constructor(private route: ActivatedRoute,private carService: CarService,private toastr: ToastrService) { }
  carId: string;
  carModel: string;
  carName: string;
  carPrice: string;

  doneLoading: boolean = false;

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('carId');
    this.carService.getCar(this.carId).subscribe((car)=>{
      this.carId = car.carId;
      this.carModel = car.carModel;
      this.carName = car.carName;
      this.carPrice = car.carPrice;
      console.log(car.carPrice);
      this.doneLoading = true;
    });
  }

  onSubmit(form: NgForm) {
    this.carService.editCar(form.value['carId'],{
      carModel: form.value['carModel'],
      carId: form.value['carId'],
      carPrice: form.value['carPrice'],
      carName: form.value['carName']
    }).subscribe(res => {
      this.toastr.success('Modified Successfully!');
      form.reset();
    });
  }

}
