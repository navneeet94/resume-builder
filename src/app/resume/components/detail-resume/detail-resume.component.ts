import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TemplateApiService } from 'src/app/shared/services/template-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-detail-resume',
  templateUrl: './detail-resume.component.html',
  styleUrls: ['./detail-resume.component.scss']
})
export class DetailResumeComponent implements OnInit {
  status: boolean = false;

  id = this.actRoute.snapshot.params['id'];
  templateData: any = {};
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

  clickEvent(){
      this.status = !this.status;       
  }

  updateTemplate() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.editTemplate(this.id, this.templateData).subscribe(data => {
        alert('Data Updated Successfuly')
        this.status = false
      })
    }
  }
  
  @ViewChild('content',{static:false}) el!: ElementRef;

  downloadResume(){
    let pdf = new jsPDF('p','pt','tabloid');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save(this.templateData['resume']);
      }
    })
    // pdf.text("Hello OSTechHelp",10,10);
  }

}
