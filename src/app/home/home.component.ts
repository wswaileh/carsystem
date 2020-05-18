import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doneLoading = false;
  cars: any = [];
  chuck: any = [];
  constructor(private toastr: ToastrService,private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars)=> {
      this.cars = cars
      this.chuck = this.chunks(cars,3);
      this.doneLoading = true;
    });
  }

  deleteCar(id: number){
    console.log("Id : " + id);
    this.carService.deleteCar(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully')
      this.ngOnInit()
    });
  }

  chunks(array, size): any[] {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };

}
