import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = []
  columns:number;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {this.projects = data});
  }

  getNumberofProjects(): number {
    return this.projects.length;
  }

  setColumNumber():void {
    if(this.projects.length <= 1) {
      this.columns = 1;
    } else if(this.projects.length === 2) {
      this.columns = 2;
    } else {
      this.columns = 3;
    }
  }
  

  public getStyles() {
    this.setColumNumber();
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
      'justify-items': 'center',
      'gap': '4rem',
    };
  }

  public getWidthStyle() {
    this.setColumNumber();
    if(this.columns === 2) {
      return {
        'max-width': 'var(--max-width)',
        'margin': 'auto',
        'padding': '0 2rem',
        'overflow': 'hidden',
      };
    }
    else {
      return {
        'margin': 'auto',
        'padding': '0 2rem',
        'overflow': 'hidden',
      }
    }
  }
}
