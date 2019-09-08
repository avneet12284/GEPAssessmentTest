import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextFieldDisplayComponent } from './text-field-display.component';

const routes: Routes = [
  {path:'', component: TextFieldDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextfieldRoutingModule { }
