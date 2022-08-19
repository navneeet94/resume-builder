import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/resume', pathMatch: 'full' },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'plugin-demo',
    loadChildren: () => import('./plugin-demo/plugin-demo.module').then(m => m.PluginDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
