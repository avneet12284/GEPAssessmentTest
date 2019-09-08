import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'GEPTest-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggerComponent {

  constructor(){}

  @Input() set dataValuesObservable(dataValuesObservable:Observable<(string | boolean)[]>) {
    dataValuesObservable.subscribe(val => console.log(val));    
  }

}
