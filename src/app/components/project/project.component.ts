import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToProject():void {
    this.route.navigate(['/project/' + this.index]);
  }

  goToPreview():void {
    window.location.href = this.project.projectUrls.domainUrl;
  }

  goToSourceCode(): void {
    window.location.href = this.project.projectUrls.frontendUrl;
  }
}
