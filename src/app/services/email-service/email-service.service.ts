import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  url: string = environment.endpointUrl + "contact-form";

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<Email>{
    return this.http.post<Email>(this.url, email)
  }
}
