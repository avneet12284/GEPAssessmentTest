import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTypeComponent } from './show-type/show-type.component';


const routes: Routes = [
  {path:'', component: ShowTypeComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
