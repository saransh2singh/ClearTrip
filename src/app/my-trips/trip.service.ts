import { Injectable } from "@angular/core";
import { ITravel, TravelMode } from "./trip.model";

@Injectable({
    providedIn : 'root'
})
export class BookingService{
    private booking:ITravel[] = [{
        travelID : 1,
        source:"Bengaluru",
        destination : "Chennai",
        travelMode : TravelMode.Plane,
        travelDate : new Date('2024-03-25'),
        imageUrl: './assets/images/photo1.jpg',
        rating : 5,
      },{
        travelID: 2,
        source: "Delhi",
        destination: "Mumbai",
        travelMode: TravelMode.Train,
        travelDate: new Date('2024-04-15'),
        imageUrl: './assets/images/photo2.jpg',
        rating : 4,
      },
      {
        travelID: 3,
        source: "Kolkata",
        destination: "Goa",
        travelMode: TravelMode.Plane,
        travelDate: new Date('2024-05-10'),
        imageUrl: './assets/images/photo3.jpg',
        rating : 3,
      },
      {
        travelID: 4,
        source: "Chennai",
        destination: "Hyderabad",
        travelMode: TravelMode.Bus,
        travelDate: new Date('2024-06-05'),
        imageUrl: './assets/images/photo4.jpg',
        rating : 3.5,
      },
      {
        travelID: 5,
        source: "Pune",
        destination: "Jaipur",
        travelMode: TravelMode.Train,
        travelDate: new Date('2024-07-20'),
        imageUrl: './assets/images/photo5.jpg',
        rating : 5,
      },
      {
        travelID: 6,
        source: "Pune",
        destination: "Chennai",
        travelMode: TravelMode.Plane,
        travelDate: new Date('2023-06-09'),
        imageUrl: './assets/images/photo6.jpg',
        rating : 4.5,
      },
      {
        travelID: 7,
        source: "Rajasthan",
        destination: "Chennai",
        travelMode: TravelMode.Bus,
        travelDate: new Date('2024-06-05'),
        imageUrl: './assets/images/photo7.jpg',
        rating : 4,
      },
      {
        travelID: 8,
        source: "Patna",
        destination: "Chennai",
        travelMode: TravelMode.Train,
        travelDate: new Date('2024-06-05'),
        imageUrl: './assets/images/photo8.jpg',
        rating : 5,
      },
      {
        travelID: 9,
        source: "Chennai",
        destination: "Mumbai",
        travelMode: TravelMode.Bus,
        travelDate: new Date('2024-06-05'),
        imageUrl: './assets/images/photo1.jpg',
        rating : 4,
      }]

      getBooking(){
        return this.booking;
      }
      getBookingById(id:number){
        const trip = this.booking.find(
            trip => trip.travelID === id
        )
        return trip;
    }
    updateBooking(booking:ITravel)
    {
        const bookingidx = this.booking.findIndex(x => x.travelID === booking.travelID);
        if(bookingidx != null && bookingidx != undefined)
        {
            this.booking[bookingidx] = booking;
        }
    }
    deleteBooking(id: number) {
        this.booking = this.booking.filter(booking => booking.travelID !== id);
      }
      createBooking(newBooking: ITravel) {
        const id = this.booking.length ? this.booking[this.booking.length - 1].travelID + 1 : 1; 
        this.booking.push({ ...newBooking, travelID : id });
      }
}