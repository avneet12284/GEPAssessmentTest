import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'GEPTest-text-field-display',
  templateUrl: './text-field-display.component.html',
  styleUrls: ['./text-field-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldDisplayComponent implements OnInit {

  type: string;

  constructor(route: ActivatedRoute) { 
    this.type = route.snapshot.queryParamMap.get('type');   
  }

  ngOnInit() {
  }

}
