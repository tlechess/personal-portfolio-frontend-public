import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
