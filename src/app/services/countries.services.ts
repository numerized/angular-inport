import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

//import {Countries} from '../countries';

@Injectable() 

export class CountriesService {
  
  constructor(private http: Http) {}

  Countries:any;

  getCountries(): Observable<Countries> {
    if ( this.Countries) { 
      return Observable.of(this.Countries); 
    } else { 
    return this.http.get(environment.ApiEndPointURLGetCities)
      .map(this.extractData);
    }
  }
    
  private extractData(res: Response) {      
    let Countries = res.json();   
    return Countries || { };
  }
  
}

export interface Countries {
  Status: Number;
  msg: String;
  categorylist: any[];
}

