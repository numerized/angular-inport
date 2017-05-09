import { Component,Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  moduleId: module.id,
  selector: 'app-header',
  template: `
      <div class="sidenav hidden-lg hidden-md hidden-sm" [style.display]="getStyle()">
	  	  	<div class="togglemenu">
							<a href="javascript:void(0)" class="closebtn" (click)="showStyle = !showStyle;"><i class="fa fa-close"></i></a>
							<!-- <span class="input-group search_icon"><span class="input-group-addon icon"><i class="fa fa-search"></i></span><input class="form-control search" type="text" placeholder="Search..."></span> -->
							<a href="/home" [routerLink]="['./home']" (click)="showStyle = !showStyle;">Explore Listings</a>
							<a href="http://www.havehalalwilltravel.com/blog/category/halal-food-guide/" target="_blank">Food Guide</a>
							<a href="http://www.havehalalwilltravel.com/blog/category/travel-guide/" target="_blank">Travel Guide</a>
							<a href="https://www.havehalalwilltravel.com/" target="_blank">Blog</a>
							<a href="http://www.havehalalwilltravel.com/advertise/" target="_blank">Advertise With Us</a>
					</div>
		 </div>
		<div class="container-fluid remove_padding" id="all">
			<!-- navbar and banner -->
			<div class="remove_padding header">
				<div class="container remove_padding">
					<div class="hidden-lg hidden-md hidden-sm col-xs-1  remove_padding">
						<span class="toggle_btn1" (click)="showStyle = !showStyle;"><i class="fa fa-bars"></i></span>
					</div>
					<div class="hidden-lg hidden-md hidden-sm col-xs-offset-3 col-xs-4 logo_align" [routerLink]="['../home']" routerLinkActive="hidden" >
						<img src="assets/images/hader_logo.png" alt="Mobile Header Logo" title="Mobile Header Logo">
					</div>

					<div class="col-lg-12 col-md-12 col-sm-12 hidden-xs remove_padding headermenu">
						<nav class="navbar main remove_padding">
							
						 	<div id="myNavbar" class="navbar-collapse collapse remove_padding"> 
									<ul class="nav navbar-nav remove_padding nav_list">
										<div class="navbar-header" [routerLink]="['../home']"  >
												<a class="navbar-brand"  ><img src="assets/images/hader_logo.png"  alt="Header Logo" title="Header Logo"></a>
										</div>
										 <!--<li><p class="input-group"><span class="input-group-addon icon"><i class="fa fa-search"></i></span><input class="form-control search" type="text" placeholder="Search..."></p></li>-->
										<li class="explr"><a [routerLink]="['./home']"  href="/home">Explore Listings</a></li>
										<li><a href="http://www.havehalalwilltravel.com/blog/category/halal-food-guide/" target="_blank">Food Guide</a></li>
										<li><a  href="http://www.havehalalwilltravel.com/blog/category/travel-guide/" target="_blank">Travel Guide</a></li>
			        			<li><a href="https://www.havehalalwilltravel.com/" target="_blank">Blog</a></li>		        			
									</ul>
									<ul class="nav navbar-nav navbar-right">
										<li class="ad"><a href="http://www.havehalalwilltravel.com/advertise/" target="_blank">Advertise With Us</a></li>
									</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>`,
  styleUrls: ['app.component.css'],
})
export class HeaderComponent {    
 
  hidetoplogo:any= false;
  NavMenuActive :any= false;
  showStyle:any= false;

 constructor(title: Title) {  
	 
 }

 

  getStyle() {
    if(this.showStyle) {
      return "block";
    } else {
      return "none";
    }
  }


}

