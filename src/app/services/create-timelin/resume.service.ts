import { Injectable } from '@angular/core';
import { Education } from 'src/app/models/education';
import { WorkExperiences as WorkExperience } from 'src/app/models/work-experiences';

@Injectable({
  providedIn: 'root'
})

//Service for resume
export class ResumeService {

  constructor() { }

  // sets the array for all work experience
  setWorkExperiences():WorkExperience[] {
    let workExperiences: WorkExperience[] = [];
    let jobdiscription: string[] = [];

    //set Chick-Fil-A
    jobdiscription = [
      "Responsible for delivering outstanding customer experiences. I helped drive a new record of serving 230 cars per hour.","This job has helped me to put the focus on customer experience."
    ];
    workExperiences.push(this.setJob(
      "Casher",
      "Chick-Fil-A",
      "Sep 2019 — Current",
      jobdiscription
    ));

    //set Kehe
    jobdiscription = [
      "I replenished approximately 40 pallets per day to insure that pickers have the products they need to do their jobs in addition to other duties. I was able to anticipate their needs so that the pallets were ready before they were needed.","This job taught me to determine the priority of the various demands for my assistance."
    ];
    workExperiences.push(this.setJob(
      "Forklift Driver",
      "Kehe ",
      "May 2017 — Sep 2018",
      jobdiscription
    ));

    //set Jasper Engines
    jobdiscription = [
      "Averaged loading over 400 engines daily on a strict time frame to insure that customers received their engines on time","matter to insure that the lines have the product to drive sales."
    ];

    workExperiences.push(this.setJob(
      "Forklift Driver",
      "Jasper Engines",
      "April 2014 — May 2017",
      jobdiscription
    ));

    return  workExperiences;
  }

  //sets the array of all education
  setEducation():Education[] {
    let education: Education[] = [
      //sets Bethel Tech
      this.setDegree(
        "Bethel School of Technology", 
        "Redding, CA",
        "April 2021 - December 2021",
        "Full Stack Development, Powered by WozU, Apple cofounder Steeve Wozniak’s coding university."
      )
    ]

    return education
  }

  //sets one job
  setJob(heading: string, location: string, date: string, discriptionList: string[]):WorkExperience {
    let job: WorkExperience = new WorkExperience;
    job.jobTitle = heading;
    job.location = location;
  
    return job;
  }
  
  //sets one Degree
  setDegree(schoolName: string, location: string, dateAttended: string, details: string): Education{
    let education: Education = new Education;
    education.schoolName = schoolName;
    education.location = location;
    education.dateAttended = dateAttended;
    education.details = details;

    return education;
  }
}
