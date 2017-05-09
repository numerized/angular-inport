
//our root app component
import {Component,Input, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CountriesService } from '../services/countries.services';
import { HttpModule } from '@angular/http';
import { environment } from 'environments/environment';
import { Title } from "@angular/platform-browser";
import { MetadataService } from 'ng2-metadata';
import {PageScrollConfig} from 'ng2-page-scroll';


@Component({ 
  selector: 'app-home',
  template: '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 remove_padding city"><h1>homepage content</h1></div>',
  providers: [ CountriesService]
})

export class HomepageComponent {
  
  Countries: any = {};
  showLoader = true;  
  
  constructor(
    private countriesService: CountriesService,
    private titleService:Title,  
    private metadataService: MetadataService,
  ) { 
    PageScrollConfig.defaultDuration = 500;
  }
  

  ngOnInit() {
    
     this.countriesService.getCountries().subscribe(data => { 
         this.Countries = data; 
         this.showLoader = false;
    });
  }
  
}
