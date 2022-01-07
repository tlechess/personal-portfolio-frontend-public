import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  //data feilds
  url: string = environment.endpointUrl + "education"

  //Constructor
  constructor(private http: HttpClient) {}

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }

}
