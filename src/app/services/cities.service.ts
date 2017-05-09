import { Injectable  } from '@angular/core';
import { Http, Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
//import { Cities } from '../cities';
//import { City } from '../city';
//import { Categories } from '../categories';
//environment = {
 // production: f

@Injectable() 
export class CitiesService {   

  constructor(private http: Http) {}

 private CityByCatUrl = environment.ApiEndPointURLGetCatURL;
 private CityDetailsUrl = environment.GetCityDetailsURl;
 private FilterDataURL = environment.ApiEndPointFilterURL;
 private FilterCatDataURL = environment.FilterCategoriesURL;
 private GetOffersURL = environment.GetOffersURL;
  City:any;
  Cities:Cities[];
  FoodList:any;
  ThingsToDo:any;
  PrayersList:any;
  FilterCategories:any={};
  
  Categories:any={};

  getCityFoodsById(CitySlug:Observable<Cities[]>) { 
    if ( this.FoodList) { 
      return Observable.of( this.FoodList); 
    } else { 
      let headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      var params  =CitySlug;      
      return this.http.post(this.CityByCatUrl,params,{headers: headers}).map(this.extractData) ;
      
    }
  }
  getCityThingsById(CitySlug:Observable<Cities[]>) {    
   
    if ( this.ThingsToDo) { 
      return Observable.of(this.ThingsToDo); 
    } else { 
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      var params  =CitySlug;       
      return  this.http.post(this.CityByCatUrl,params,{headers: headers}).map(this.extractData); 
    }
  }
  
  getCityPrayersById(CitySlug:Observable<Cities[]>) { 

    if ( this.PrayersList) { 
      return Observable.of( this.PrayersList); 
    } else { 

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      console.log(CitySlug);
       var params  =CitySlug;       
      return this.http.post(this.CityByCatUrl,params,{headers: headers}).map(this.extractData);
    }
  }
  
  getDetails(City: Number) {
    return this.Cities;
    //console.log(Cities);
    //console.log("call details func");
    //console.log(Promise.resolve(Cities).then(Cities => Cities.filter(h => h.id === id)[0]));
	}

  getCityDetailsById(CitySlug,CategoryId,ItemSlug:Observable<Cities[]>) { 

   /* if ( this.PrayersList) { 
      return Observable.of( this.PrayersList); 
    } else { */
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      var params  ="cid="+CategoryId+"&city_slug="+CitySlug+"&name_slug="+ItemSlug; 
      console.log(params);
      return this.http.post(this.CityDetailsUrl,params,{headers: headers}).map(this.extractData);
    //}
  }

  getFilterCategories(CitySlug:Observable<Categories[]>) { 
    
   /* console.log(this.FilterCategories);
   if ( this.FilterCategories) { 
      return Observable.of( this.FilterCategories); 
    } else {*/
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
   
      var params  ="city_slug="+CitySlug;     
     
      return this.http.post(this.FilterCatDataURL,params,{headers: headers}).map(this.extractData);
    //}
  }

  getFilterdata(ParamsValue:String) { 
  /* if ( this.PrayersList) { 
      return Observable.of( this.PrayersList); 
    } else {*/
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      var params = ParamsValue;     
     
     
      return this.http.post(this.FilterDataURL,params,{headers: headers}).map(this.extractData);
   // }
  }


    getOffersdata(ParamsValue:String) { 
      /*if ( this.PrayersList) { 
          return Observable.of( this.PrayersList); 
        } else {*/
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');
      var params = ParamsValue;       
      //var params  ="cid="+CategoryId+"&city_slug="+CitySlug+"&name_slug="+ItemSlug; 
     
      return this.http.post(this.GetOffersURL,params,{headers: headers}).map(this.extractData);
    //}
  }

  private extractData(res: Response) {    
        let Cities = res.json(); 
        return Cities || {};
  }


   getsitemap() { 

      let headers = new Headers();
      headers.append('Content-Type', 'application/xml');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
      headers.append('Access-Control-Allow-Origin', '*');     
      return this.http.get("http://localhost:8080/test/",{headers: headers}).map(this.extractData);
    
  }

}



export interface Cities {
  Status: String;
  msg: String;
  categorylistvalues: any;
}

export interface Categories {
  Status: String;
  msg: String;
  categorylistvalues: any;
}
