import { NgModule } from '@angular/core';
import { TextfieldRoutingModule } from './textfield-routing.module';
import { TextFieldDisplayComponent } from './text-field-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({  
  imports: [
    TextfieldRoutingModule,
    SharedModule
    ],
  declarations: [TextFieldDisplayComponent]
})
export class TextfieldModule { }
