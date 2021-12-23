import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor() { }

  getSkills(): Skill[] {
    let skills: Skill[] = []
    skills.push(this.getSkill("Html & CSS", "80%"));
    skills.push(this.getSkill("javascript", "30%"));
    skills.push(this.getSkill("Angular", "50%"));
    skills.push(this.getSkill("Java", "60%"));
    skills.push(this.getSkill("Spring Boot", "40%"));
    skills.push(this.getSkill("SQL", "30%"));
    return skills;
  }

  getSkill(skillName: string, skillPercentage: string): Skill {
    let skill: Skill = new Skill;
    skill.skillName = skillName;
    skill.skillPercentage = skillPercentage;
    return skill;
  }

}
