import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.scss']
})
export class PdfDownloadComponent implements OnInit {
  @ViewChild('content',{static:false}) el!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  makePDF(){
    let pdf = new jsPDF('l','in',[5000,3000]);
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("demo.pdf");
      }
    })
    // pdf.text("Hello OSTechHelp",10,10);
  }

}
