import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ResumeTemplatesComponent } from './components/resume-templates/resume-templates.component';
import { DetailResumeComponent } from './components/detail-resume/detail-resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeTemplatesComponent,
    DetailResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ResumeModule { }
