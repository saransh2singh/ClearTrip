import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private loggedIn = false;

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === email && user.password === password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  register(name: string, email: string, password: string): void {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
