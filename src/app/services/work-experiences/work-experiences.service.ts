import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';
import { WorkExperiences } from 'src/app/models/work-experiences';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  //data feilds
  url: string = environment.endpointUrl + "workeperience";
  
  //Constructor  
  constructor(private http: HttpClient) { }

  //Methods
  getWorkExperiences(): Observable<WorkExperiences[]> {
    return this.http.get<WorkExperiences[]>(this.url);
  }
}
