import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ShowTypeComponent } from './show-type/show-type.component';
import { DisplayComponent } from './display/display.component';
import { UserlogModule } from '../userlog/userlog.module';

@NgModule({
  declarations: [DisplayComponent, ShowTypeComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    UserlogModule
  ],
  exports:[
    CommonModule,
    DisplayComponent
  ]
})
export class SharedModule { }
