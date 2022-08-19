import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateResumeComponent } from './components/create-resume/create-resume.component';
import { EditTemplateComponent } from './components/edit-template/edit-template.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ViewTemplateComponent } from './components/view-template/view-template.component';

const routes: Routes = [
  {
    path:'', component: AdminComponent,
    children: [
      {path:'', component: ResumeListComponent},
      {path:'create-resume', component: CreateResumeComponent},
      { path: 'view-template/:id', component: ViewTemplateComponent },
      { path: 'edit-template/:id', component: EditTemplateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
