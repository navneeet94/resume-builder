import { Component, OnInit } from '@angular/core';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {
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
  templateData: any = {};
  constructor(
    public restApi: TemplateApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.restApi.singlegetTemplate(this.id).subscribe((data: {}) => {
      this.templateData = data;
    })
  }

  // Update employee data
  updateTemplate() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.editTemplate(this.id, this.templateData).subscribe(data => {
        console.log('File update successfully')
        window.location.reload();
      })
    }
  }

}
