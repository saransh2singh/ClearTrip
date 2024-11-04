import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  customerForm!: FormGroup;

  constructor(private authService: AuthComponent,private router: Router) {}

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email 
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get name() {
    return this.customerForm.get('name');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get password() { 
    return this.customerForm.get('password');
  }

  onSave() {
    const { email, password } = this.customerForm.value;
    if (this.authService.login(email, password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed! Please check your credentials.');
    }
  }
}
