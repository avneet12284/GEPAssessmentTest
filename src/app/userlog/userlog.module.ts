import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [LoggerComponent],
  imports: [
    CommonModule
  ],
  exports:[LoggerComponent]
})
export class UserlogModule { }
