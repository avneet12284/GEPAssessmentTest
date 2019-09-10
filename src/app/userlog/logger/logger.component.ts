import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core-data/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'GEPTest-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggerComponent implements OnInit, OnDestroy {

  type:string;
  private loggerSubscription: Subscription

  constructor(private apiService: ApiService,route: ActivatedRoute){
    this.type = route.snapshot.queryParamMap.get('type');    
  }

  ngOnInit(){
    this.loggerSubscription=this.apiService.getDataModelRefByType(this.type)
                                     .pipe(map(obj => obj.dataModelValues))
                                     .subscribe(val => console.log(val));
  }

  ngOnDestroy(){
    this.loggerSubscription.unsubscribe();
  }
    
}
