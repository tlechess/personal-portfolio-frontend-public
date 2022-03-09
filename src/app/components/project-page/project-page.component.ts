import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projects: Project[];
  project: Project = new Project;
  faChevronRight = faChevronRight;
  constructor(private projectService: ProjectService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe( data => {
      this.projects = data;
      this.routes.paramMap.subscribe(params => {
        this.project = this.projects[+params.get('id')];
      }) 
    })
  }

  goToPreview():void {
    window.location.href = this.project.projectUrls.domainUrl;
  }

  goToFrontEndSourceCode(): void {
    window.location.href = this.project.projectUrls.frontendUrl;
  }

  goToBackEndSourceCode(): void {
    window.location.href = this.project.projectUrls.backendUrl
  }
}
