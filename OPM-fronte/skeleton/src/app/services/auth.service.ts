// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth'; // replace with your backend URL

  constructor(private http: HttpClient) {}


  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map(response => {
          // Store the authority in local storage
          console.log(response)
          localStorage.setItem('authority', response.payload.user.authority);
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('authority');
  }


  getAuthority() {
    return localStorage.getItem('authority');
  }
}