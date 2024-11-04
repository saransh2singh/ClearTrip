import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ITravel } from '../my-trips/trip.model';
import { StarsComponent } from '../stars/stars.component';
import { MyTripsServiceObs } from '../my-trips/my-trips.serviceobs.service';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, StarsComponent],
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  id: number | undefined;
  booking: ITravel | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private bookingService: MyTripsServiceObs) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      this.booking = this.bookingService.getBookingById(this.id);
    });
  }

  onBack() {
    this.router.navigate(['/mytrips']);
  }

  onEdit() {
    this.router.navigate(['/booking', this.id, 'edit']);
  }

  onDelete() {
    if (this.id !== undefined) {
      const confirmation = confirm("Are you sure you want to delete this booking?");
      if (confirmation) {
        this.bookingService.deleteBooking(this.id);
        this.router.navigate(['/mytrips']);
      }
    }
  }
  
}
