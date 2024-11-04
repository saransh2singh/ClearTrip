import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { BookingComponent } from "./booking/booking.component";
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, BookingComponent,ContactComponent,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel';
  constructor(public authService: AuthComponent) {}

  logout() {
    this.authService.logout();
  }
}
