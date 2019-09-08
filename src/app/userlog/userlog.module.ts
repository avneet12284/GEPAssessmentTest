import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerComponent } from './logger/logger.component';
import { UserlogRoutingModule } from './userlog-routing.module';

@NgModule({
  declarations: [LoggerComponent],
  imports: [
    CommonModule,
    UserlogRoutingModule
  ]
})
export class UserlogModule { }
