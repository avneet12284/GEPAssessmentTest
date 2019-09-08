import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ApiService } from 'src/app/core-data/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'GEPTest-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {  

  private dataValues$: Observable<(string | boolean)[]>

  constructor(private apiService: ApiService){}

  @Input() set type(type:string) {
    this.dataValues$ = this.apiService.getDataModelRefByType(type)
                                     .pipe(map(obj => obj.dataModelValues));
  }
}
