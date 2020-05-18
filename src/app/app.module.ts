import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {CardModule} from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { EditcarComponent } from './editcar/editcar.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CustomersComponent,
    OrdersComponent,
    AddCarComponent,
    EditcarComponent,
    EditCustomerComponent,
    EditbookingComponent,
    AddcustomerComponent,
    AddbookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
