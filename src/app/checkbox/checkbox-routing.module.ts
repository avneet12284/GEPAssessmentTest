import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxFieldDisplayComponent } from './checkbox-field-display.component';

const routes: Routes = [
  {path:'', component: CheckboxFieldDisplayComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxRoutingModule { }
