import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'project/:id', component: ProjectPageComponent},
  { path: 'contact/confirmation', component: ConfirmationComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
