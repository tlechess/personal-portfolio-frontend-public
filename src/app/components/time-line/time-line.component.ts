import { Component, Input, OnInit } from '@angular/core';
import { TimeLine } from 'src/app/models/time-line';
import { CreateTimelineService } from 'src/app/services/create-timelin/create-timeline.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  educations: TimeLine[] = [];
  jobs: TimeLine[] = [];
  educationIndex: number = 0;
  jobsIndex: number = 0;

  constructor(private createTimeService: CreateTimelineService) { }

  ngOnInit(): void {
    this.educations = this.createTimeService.setEducation();
    this.jobs = this.createTimeService.setJob();
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
