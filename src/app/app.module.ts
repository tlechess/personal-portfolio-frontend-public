import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { Router, RouterModule, Routes } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { WorkExperianceComponent } from './components/work-experiance/work-experiance.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TestComponent } from './components/test/test.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResumeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    TimeLineComponent,
    WorkExperianceComponent,
    ProgressBarComponent,
    TestComponent,
    ProjectComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
