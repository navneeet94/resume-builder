import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfDownloadComponent } from './components/pdf-download/pdf-download.component';
import { SampleListComponent } from './components/sample-list/sample-list.component';
import { PluginDemoComponent } from './plugin-demo.component';



const routes: Routes = [
  {
    path: '', component: PluginDemoComponent,
    children: [
      {path:'',component: SampleListComponent},
      {path:'pdf-download',component: PdfDownloadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginDemoRoutingModule { }
