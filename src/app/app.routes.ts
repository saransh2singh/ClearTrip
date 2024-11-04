import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingCreateComponent } from './booking-create/booking-create.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'mytrips', component: MyTripsComponent, canActivate: [AuthGuard] },
    { path: 'booking/create', component: BookingCreateComponent, canActivate: [AuthGuard] },
    { path: 'booking/:id', component: BookingDetailComponent, canActivate: [AuthGuard] },
    { path: 'booking/:id/edit', component: BookingEditComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: ErrorComponent },
];