import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTypeComponent } from './show-type/show-type.component';


const routes: Routes = [
  {path:'logger', loadChildren: '../userlog/userlog.module#UserlogModule',  pathMatch: 'full'},
  {path:'', component: ShowTypeComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
