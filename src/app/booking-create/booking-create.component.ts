import { Component } from '@angular/core';
import { ITravel, TravelMode } from '../my-trips/trip.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyTripsServiceObs } from '../my-trips/my-trips.serviceobs.service';

@Component({
  selector: 'app-booking-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css'], 
})
export class BookingCreateComponent {
  newBooking: ITravel = {
    travelID: 1,
    source: '',
    destination: '',
    rating: 0,
    travelMode: TravelMode.Plane,
    travelDate: new Date(),
    imageUrl: 'assets/images/photo1.jpg',
  };

  travelModes = Object.values(TravelMode); 

  constructor(private router: Router, private bookingService: MyTripsServiceObs) {}

  onCreate() {
    this.bookingService.createBooking(this.newBooking);
    this.router.navigate(['/mytrips']);
  }
}
