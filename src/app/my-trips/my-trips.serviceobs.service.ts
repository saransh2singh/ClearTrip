import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ITravel } from "./trip.model";

@Injectable({
  providedIn: 'root'
})
export class MyTripsServiceObs {
  private bookingUrl = 'assets/api/trips.json';
  private bookingsSubject = new BehaviorSubject<ITravel[]>([]);
  bookings$ = this.bookingsSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.http.get<ITravel[]>(this.bookingUrl).pipe(
      tap(data => {
        this.bookingsSubject.next(data);
        console.log('Initial trips loaded:', JSON.stringify(data));
      }),
      catchError(this.handleError<ITravel[]>('loadInitialData', []))
    ).subscribe();
  }

  getBookings(): Observable<ITravel[]> {
    return this.bookings$;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getBookingById(id: number): ITravel | undefined {
    return this.bookingsSubject.getValue().find(trip => trip.travelID === id);
  }

  updateBooking(booking: ITravel): void {
    const bookings = this.bookingsSubject.getValue();
    const bookingIndex = bookings.findIndex(x => x.travelID === booking.travelID);
    if (bookingIndex !== -1) {
      bookings[bookingIndex] = booking; 
      this.bookingsSubject.next(bookings);
      console.log('Booking updated:', bookings[bookingIndex]);
    } else {
      console.error('Booking not found for update');
    }
  }

  deleteBooking(id: number): void {
    const bookings = this.bookingsSubject.getValue();
    this.bookingsSubject.next(bookings.filter(booking => booking.travelID !== id));
    console.log("After delete:", this.bookingsSubject.getValue());
  }

  createBooking(newBooking: ITravel): void {
    const bookings = this.bookingsSubject.getValue();
    const id = bookings.length ? bookings[bookings.length - 1].travelID + 1 : 1; 
    this.bookingsSubject.next([...bookings, { ...newBooking, travelID: id }]);
  }
}
