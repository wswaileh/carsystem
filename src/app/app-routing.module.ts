import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditcarComponent } from './editcar/editcar.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddbookingComponent } from './addbooking/addbooking.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cars", component: HomeComponent},
  {path: "addcar", component: AddCarComponent},
  {path: "editcar/:carId", component: EditcarComponent},
  {path: "bookings", component: OrdersComponent},
  {path: "addbooking", component: AddbookingComponent},
  {path: "editbooking/:bookingId", component: EditbookingComponent},
  {path: "customers", component: CustomersComponent},
  {path: "addcustomer", component: AddcustomerComponent},
  {path: "editcustomer/:customerId", component: EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
