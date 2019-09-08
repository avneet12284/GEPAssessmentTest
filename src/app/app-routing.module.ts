import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTypeComponent } from './shared/show-type/show-type.component';

const routes: Routes = [
    {path:'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxModule',  pathMatch: 'full'},
    {path:'textfield', loadChildren: './textfield/textfield.module#TextfieldModule',  pathMatch: 'full'},
    {path: '', component: ShowTypeComponent, pathMatch: 'full'}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
