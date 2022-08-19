import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResumeComponent } from './components/detail-resume/detail-resume.component';
import { ResumeTemplatesComponent } from './components/resume-templates/resume-templates.component';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  {
    path:'', component: ResumeComponent,
    children: [
      {path: '', component: ResumeTemplatesComponent},
      {path: 'resume-detail/:id', component: DetailResumeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
