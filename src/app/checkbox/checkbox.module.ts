import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxFieldDisplayComponent } from './checkbox-field-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CheckboxFieldDisplayComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    SharedModule
  ]
})
export class CheckboxModule { }
