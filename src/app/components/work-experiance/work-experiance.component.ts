import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillServiceService } from 'src/app/services/skill/skill-service.service';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.css']
})
export class WorkExperianceComponent implements OnInit {
  skills : Skill[] = []
  faCogs = faCogs;
  constructor(private skillService: SkillServiceService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

}
