import { Component, Input, OnInit } from '@angular/core';
import { WorkExperiences } from 'src/app/models/work-experiences';
import { ResumeService } from 'src/app/services/create-timelin/resume.service';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { EducationService } from 'src/app/services/education/education.service';
import { WorkExperiencesService } from 'src/app/services/work-experiences/work-experiences.service';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  educations: Education[] = [];
  jobs: WorkExperiences[] = [];
  faUserGraduate = faUserGraduate;
  faBriefcase = faBriefcase;
  faChevronRight = faChevronRight

  constructor(
    private createTimeService: ResumeService,
    private educationService: EducationService,
    private workExperienceService: WorkExperiencesService
  ) {}

  ngOnInit(): void {
    this.getEducations();
    this.getWorkExperiences();
  }

  getEducations():void {
    this.educationService.getEducations().subscribe(data => this.educations = data);
  }

  getWorkExperiences(): void {
    this.workExperienceService.getWorkExperiences().subscribe(data => this.jobs = data);
  }
}
