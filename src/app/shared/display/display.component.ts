import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ApiService } from 'src/app/core-data/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'GEPTest-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {  

  private dataValues$: Observable<(string | boolean)[]>
  private _type:string;

  constructor(private apiService: ApiService, private _router: Router){}

  @Input() set type(type:string) {
    this._type=type;
    this.dataValues$ = this.apiService.getDataModelRefByType(type)
                                     .pipe(map(obj => obj.dataModelValues));
  }

  clickButton(){
    this._router.navigate(['/logger'], {queryParams: {type: `${this._type}`}});
  }
}
