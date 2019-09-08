import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggerComponent } from './logger/logger.component';

const routes: Routes = [
  {path:'', component: LoggerComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlogRoutingModule { }
