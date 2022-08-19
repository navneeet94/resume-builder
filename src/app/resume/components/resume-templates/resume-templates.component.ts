import { Component, OnInit } from '@angular/core';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';

@Component({
  selector: 'app-resume-templates',
  templateUrl: './resume-templates.component.html',
  styleUrls: ['./resume-templates.component.scss']
})
export class ResumeTemplatesComponent implements OnInit {

  TemplatesList: any = [];
  constructor(public restApi: TemplateApiService) {}

  ngOnInit(): void {
    this.loadTemplates();
  }

  // Get employees list
  loadTemplates() {
    return this.restApi.getTemplates().subscribe((data: {}) => {
      this.TemplatesList = data;
    });
  }

}
