import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 link: string = "https://cors-anywhere.herokuapp.com/https://lnxuzjy06k.execute-api.eu-central-1.amazonaws.com/BZU10CARS/bzu10car";

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get<any[]>(this.link);
  }

  getCar(id){
    return this.http.get<any>(this.link+"/"+id);
  }

  addCar(car){
    return this.http.post(this.link,car);
  }

  deleteCar(id: number){
    return this.http.delete(this.link + "/" + id );
  }

  editCar(id, newCar){
    return this.http.put(this.link+"/"+id, newCar);
  }
}
