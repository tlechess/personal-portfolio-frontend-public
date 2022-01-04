import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  //data feilds
  url: string = "http://18.218.218.33:8080/education"

  //Constructor
  constructor(private http: HttpClient) {}

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }

}
