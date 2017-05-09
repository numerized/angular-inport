import { Component,NgModule,enableProdMode } from '@angular/core';
import { BrowserModule,Title  }  from '@angular/platform-browser';
import { APP_BASE_HREF, Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { HomepageComponent }   from './home/homepage.component';
import { HeaderComponent }   from './header.component';
import { FooterComponent }   from './footer.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MetadataModule } from 'ng2-metadata';
import { Ng2PageScrollModule} from 'ng2-page-scroll';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { ModalModule,ModalBackdropComponent,ModalBackdropOptions,ModalDirective  } from 'ng2-bootstrap';

import { NgInviewModule } from 'angular-inport'; 
import { CountriesService }          from './services/countries.services';
import { CitiesService }          from './services/cities.service';



@Component({
 // moduleId: module.id,
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>`,
  styleUrls: ['../app/app.component.css'],
})

export class AppComponent { 

}


const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',  component: HomepageComponent},  
];



@NgModule({
  imports: [   
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(routes),
    HttpModule,
    ModalModule,    
    NgInviewModule,    
    MetadataModule.forRoot(),
    NgbModule.forRoot(),   
    InfiniteScrollModule,
    LazyLoadImageModule,
    Ng2PageScrollModule.forRoot(),  
  ],
  declarations: [
    AppComponent,    
    HomepageComponent,
    HeaderComponent,
    FooterComponent,     
  ],
  
  providers: [ CitiesService, ModalBackdropComponent,CountriesService,Title,  
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    ],
  bootstrap: [ AppComponent]
  
  
})
export class AppModule { }  
