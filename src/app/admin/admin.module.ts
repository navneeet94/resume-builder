import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateResumeComponent } from './components/create-resume/create-resume.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTemplateComponent } from './components/view-template/view-template.component';
import { EditTemplateComponent } from './components/edit-template/edit-template.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AdminComponent,
    CreateResumeComponent,
    ResumeListComponent,
    ViewTemplateComponent,
    EditTemplateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AngularEditorModule 
  ]
})
export class AdminModule { }
