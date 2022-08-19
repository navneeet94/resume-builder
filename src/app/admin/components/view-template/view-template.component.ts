import { Component, OnInit, Input } from '@angular/core';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent implements OnInit {

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
  
  id = this.actRoute.snapshot.params['id'];
  @Input() templateData: any = {};
  @Input() createTemplateData:any = {}
  constructor(
    public restApi: TemplateApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit(): void {
    this.restApi.singlegetTemplate(this.id).subscribe((data: {}) => {
      this.templateData = data;
    })
  }

  duplicateTemplate(dataEmployee: any) {
    this.createTemplateData['resume'] = this.templateData['resume']
    this.createTemplateData['theme'] = this.templateData['theme']
    this.createTemplateData['headerBG'] = this.templateData['headerBG']
    this.createTemplateData['pic'] = this.templateData['pic']
    this.createTemplateData['fname'] = this.templateData['fname']
    this.createTemplateData['lname'] = this.templateData['lname']
    this.createTemplateData['heading'] = this.templateData['heading']
    this.createTemplateData['post'] = this.templateData['post']
    this.createTemplateData['expNum'] = this.templateData['expNum']
    this.createTemplateData['email'] = this.templateData['email']
    this.createTemplateData['mobNum'] = this.templateData['mobNum']
    this.createTemplateData['addr'] = this.templateData['addr']
    this.createTemplateData['linProfile'] = this.templateData['linProfile']
    this.createTemplateData['summary'] = this.templateData['summary']
    this.createTemplateData['jobSkills'] = this.templateData['jobSkills']
    this.createTemplateData['toolsTech'] = this.templateData['toolsTech']
    this.createTemplateData['experinceDetail'] = this.templateData['experinceDetail']
    this.createTemplateData['educationDetail'] = this.templateData['educationDetail']
    this.createTemplateData['projectDetails'] = this.templateData['projectDetails']
    this.createTemplateData['skillsDetail'] = this.templateData['skillsDetail']
    this.createTemplateData['certificationDetails'] = this.templateData['certificationDetails']
    this.createTemplateData['coursesDetail'] = this.templateData['coursesDetail']
    this.createTemplateData['achievmentsDetail'] = this.templateData['achievmentsDetail']
    this.createTemplateData['languages'] = this.templateData['languages']
    this.createTemplateData['languages'] = this.templateData['languages']
    this.createTemplateData['visibility'] = true
    console.log(this.createTemplateData)
    this.restApi.createEmployee(this.createTemplateData).subscribe((data) => {
      this.router.navigate(['/admin']);
    });
  }

}
