import { Component, OnInit } from '@angular/core';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

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

  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteTemplate(id).subscribe((data) => {
        this.loadTemplates();
      });
    }
  }

}
