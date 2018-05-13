import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
