import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Register } from './register.model';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthComponent,private router: Router) {}
//   user = new Register();

// save(userform:NgForm)
// {
//   console.log(userform.form);
//   console.log(userform.valid);
//   console.log("Saved info " + JSON.stringify(userform.value))
// }
firstName = '';
lastName = '';
email = '';
phone = '';
password: string = '';


onSubmit(form: any) {
  this.authService.register(this.firstName + ' ' + this.lastName, this.email, this.password);
    alert('Registration successful! You can now log in.');
    this.router.navigate(['/login']);
}
}
