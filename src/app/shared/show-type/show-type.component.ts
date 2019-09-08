import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core-data/api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'GEPTest-show-type',
  templateUrl: './show-type.component.html',
  styleUrls: ['./show-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowTypeComponent implements OnInit {

  configTypes$: Observable<string[]>;
 
  constructor(private apiService: ApiService, private _router: Router) {}

  ngOnInit() {
    this.configTypes$ = this.apiService.getConfigByType().pipe(map(obj => obj.configTypes));
    }

  clickButton(type: string){
    this._router.navigate([`/${type}`], {queryParams: {type: `${type}`}});
  }

}
