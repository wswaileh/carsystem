import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  link: string = "https://cors-anywhere.herokuapp.com/https://ee5hafka7f.execute-api.eu-central-1.amazonaws.com/BZU10Bookings/bzu10bookings";
  constructor(private http: HttpClient) { }

  getBookings(){
    return this.http.get(this.link);
  }

  getBooking(id){
    return this.http.get<any>(this.link+"/"+id);
  }

  addBooking(Booking){
    return this.http.post(this.link,Booking);
  }

  deleteBooking(id: number){
    return this.http.delete(this.link + "/" + id);
  }

  editBooking(id, newBooking){
    
    return this.http.put(this.link+"/"+id, newBooking);
  }
  
}
