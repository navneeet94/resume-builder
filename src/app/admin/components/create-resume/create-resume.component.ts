import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.scss']
})
export class CreateResumeComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '200px',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  @Input() templateData = { resume: '', theme: '', headerBG:'', pic: '', fname: '', lname: '', heading:'', post:'', expNum:'', email: '', mobNum:'', addr:'', linProfile:'' , summary:'' ,jobSkills:'', toolsTech:'', experinceDetail: '', educationDetail:'', projectDetails: '', skillsDetail:'', certificationDetails:'', coursesDetail:'', achievmentsDetail: '', languages:'', visibility: true };
  constructor(public restApi: TemplateApiService, public router: Router) {}

  ngOnInit(): void {
  }
  addTemplate(dataEmployee: any) {
    this.restApi.createEmployee(this.templateData).subscribe((data: {}) => {
      this.router.navigate(['/admin']);
    });
  }

}
