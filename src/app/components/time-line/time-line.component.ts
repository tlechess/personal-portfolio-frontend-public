import { Component, Input, OnInit } from '@angular/core';
import { WorkExperiences } from 'src/app/models/work-experiences';
import { ResumeService } from 'src/app/services/create-timelin/resume.service';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  educations: Education[] = [];
  jobs: WorkExperiences[] = [];
  educationIndex: number = 0;
  jobsIndex: number = 0;
  faUserGraduate = faUserGraduate;
  faBriefcase = faBriefcase;
  faChevronRight = faChevronRight

  constructor(private createTimeService: ResumeService) { }

  ngOnInit(): void {
    this.educations = this.createTimeService.setEducation();
    this.jobs = this.createTimeService.setWorkExperiences();
  }

  setEducationIndex(): number {
    this.educationIndex = this.educationIndex + 1
    return this.educationIndex;
  }

  setJobsIndex(): number {
    this.jobsIndex = this.jobsIndex + 1
    return this.jobsIndex;
  }

}
