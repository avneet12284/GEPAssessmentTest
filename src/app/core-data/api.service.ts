import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { ConfigData, Types, DataModelValues } from './models/ConfigData';
import { config } from './data/config';
import { dataModel } from './data/dataModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configDataObservable: Observable<ConfigData>;
      
    constructor() {
      this.configDataObservable = from(config);
    }

    
    getConfigByType(): Observable<Types>{          
         let arr: string[] = config.map(element => element.type);
         arr = arr.filter((item,index) => arr.indexOf(item) === index);
         return of({configTypes: arr});
    }
   
    getDataModelRefByType(type: string): Observable<DataModelValues>{
      const arr: (string | boolean)[]=config.filter(element => element.type === type)
                                          .map(element => dataModel[element.dataModelRef]);
      return of({dataModelValues: arr});     
}
}
