import { Component, OnInit } from '@angular/core';
import { ITravel } from './trip.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StarsComponent } from "../stars/stars.component";
import { MyTripsServiceObs } from './my-trips.serviceobs.service';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, StarsComponent],
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {
  title: string = '';
  booking: ITravel[] = [];
  searchTerm: string = '';
  selectedDestination: string | null = null; 

  constructor(private _myTripsService: MyTripsServiceObs, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._myTripsService.getBookings().subscribe({
      next: (data: ITravel[]) => {
        this.booking = data.map(trip => ({
          ...trip,
          travelDate: new Date(trip.travelDate)
        }));
      },
      error: (err: any) => {
        console.error('Error fetching bookings:', err);
      }
    });
  }

  get filteredBookings(): ITravel[] {
    let filtered = this.booking;

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(trip =>
        trip.source.toLowerCase().includes(term) ||
        trip.destination.toLowerCase().includes(term) ||
        trip.travelMode.toLowerCase().includes(term) ||
        trip.travelDate.toISOString().includes(term)
      );
    }

    if (this.selectedDestination) {
      filtered = filtered.filter(trip => trip.destination === this.selectedDestination);
    }

    return filtered;
  }

  filterByDestination(destination: string) {
    this.selectedDestination = destination;
  }

  clearFilter() {
    this.selectedDestination = null;
    this.searchTerm = ''; 
  }

  onRatingClicked(rate: string): void {
    this.title = 'Top Movies ' + rate;
  }

  createBooking() {
    this.router.navigate(['/booking/create']); 
  }
}
