import { Component, OnInit } from '@angular/core';
import { ITravel } from '../my-trips/trip.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyTripsServiceObs } from '../my-trips/my-trips.serviceobs.service';

@Component({
  selector: 'app-booking-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css'] 
})
export class BookingEditComponent implements OnInit {
  id: number | undefined;
  booking: ITravel | undefined;
  travelModes: string[] = ['Plane', 'Train', 'Bus']; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: MyTripsServiceObs
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      this.booking = this.bookingService.getBookingById(this.id);
      console.log(this.booking);
    });
  }

  onSave() {
    if (this.booking) {
      this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['/mytrips']);
  }
}
