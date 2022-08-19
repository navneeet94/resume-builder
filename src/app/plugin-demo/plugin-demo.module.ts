import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginDemoRoutingModule } from './plugin-demo-routing.module';
import { PluginDemoComponent } from './plugin-demo.component';
import { PdfDownloadComponent } from './components/pdf-download/pdf-download.component';
import { SampleListComponent } from './components/sample-list/sample-list.component';


@NgModule({
  declarations: [
    PluginDemoComponent,
    PdfDownloadComponent,
    SampleListComponent
  ],
  imports: [
    CommonModule,
    PluginDemoRoutingModule
  ]
})
export class PluginDemoModule { }
