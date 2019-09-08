import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'GEPTest-checkbox-field-display',
  templateUrl: './checkbox-field-display.component.html',
  styleUrls: ['./checkbox-field-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFieldDisplayComponent implements OnInit {

  type: string;

  constructor(route: ActivatedRoute) { 
    this.type = route.snapshot.queryParamMap.get('type');    
  }

  ngOnInit() {
  }

}
