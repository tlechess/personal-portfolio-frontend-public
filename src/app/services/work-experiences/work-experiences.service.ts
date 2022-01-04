import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';
import { WorkExperiences } from 'src/app/models/work-experiences';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  //data feilds
  url: string = "http://18.218.218.33:8080/workeperience"
  
  //Constructor  
  constructor(private http: HttpClient) { }

  //Methods
  getWorkExperiences(): Observable<WorkExperiences[]> {
    return this.http.get<WorkExperiences[]>(this.url);
  }
}
