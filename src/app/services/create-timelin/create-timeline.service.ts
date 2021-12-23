import { Injectable } from '@angular/core';
import { TimeLine } from 'src/app/models/time-line';

@Injectable({
  providedIn: 'root'
})
export class CreateTimelineService {

  constructor() { }

  setEducation():TimeLine[] {
    let education: TimeLine[] = [];
    education.push(this.setTimeLine(
      "Bethel Tech", 
      "April 2021 - December 2021", "Caleforna", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));

    education.push(this.setTimeLine(
      "Bethel Tech", 
      "April 2021 - December 2021", "Caleforna", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));
    education.push(this.setTimeLine(
      "Bethel Tech", 
      "April 2021 - December 2021", "Caleforna", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));

    return  education;
  }

  setJob():TimeLine[] {
    let job: TimeLine[] = [];
    job.push(this.setTimeLine(
      "Check-fil-a", 
      "Sep 2019 - current", "Chick-fil-a", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));

    job.push(this.setTimeLine(
      "Bethel Tech", 
      "April 2021 - December 2021", "Caleforna", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));

    job.push(this.setTimeLine(
      "Bethel Tech", 
      "April 2021 - December 2021", "Caleforna", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus id commodi labore qui rem quod recusandae, officiis omnis, fugiat ex animi magni minus facere nulla, rerum hic nam nesciunt. Temporibus."));

      return  job;
  }


  setTimeLine(heading: string, date: string,  location: string, paragraph: string):TimeLine {
    let timeLine: TimeLine = new TimeLine;
    timeLine.heading = heading;
    timeLine.date = date;
    timeLine.location = location;
    timeLine.perigraph = paragraph;

    return timeLine;
  }
}
