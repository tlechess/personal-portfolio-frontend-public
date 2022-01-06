import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  url: string = "http://18.218.218.33:8080/contact-form";

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<Email>{
    return this.http.post<Email>(this.url, email)
  }
}
