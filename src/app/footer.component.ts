import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: `<!-- mobile app -->
		<div class="container-fluid remove_padding mobile">
			<div class="container">
				<div class="col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3 col-sm-offset-0 col-sm-4 col-xs-12 phone remove_padding">
					<img src="assets/images/mobile.png" alt="Mobile APP" title="Mobile APP" class="img-responsive">
				</div>
				<div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 col-sm-5 col-xs-12 app remove_padding">
					<h3>INTRODUCING THE<br /> HHWT TRAVEL<br /> PLANNER</h3>
					<p>Available on the Apple App Store and the<br /> Android Play Store.</p>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 app_link">
						<a href="{{IOSAppUrl}}" target="_blank"><img src="assets/images/ios_btn.png"  alt="IOS APP Button" title="IOS APP Button"></a>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 app_link">
						<a target="_blank" href="{{AnroidPlayUrl}}"><img src="assets/images/android_btn.png" alt="Android APP Button" title="Android APP Button" ></a>
					</div>
				</div>
			</div>
		</div><div class="container-fluid remove_padding" id="all">		
		<!-- footer -->
		<div class="container-fluid footer remove_padding">
		<!-- links -->
			<div class="container remove_padding">
				<div class="foot_details remove_padding">
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 remove_padding foot_titles">
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove_padding">
							<h4 class="titles">Cities</h4>
							<ul class="links">
								<li><a href="tokyo">Tokyo</a></li>
								<li><a href="seoul">Seoul</a></li>
								<li><a href="singapore">Singapore</a></li>
								<li><a href="bangkok">Bangkok</a></li>
							</ul>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove_padding">
							<h4 class="titles">Blogs</h4>
							<ul class="links">
								<li><a href="http://www.havehalalwilltravel.com/blog/category/halal-food-guide/" target="_blank">Halal Food Guide</a></li>
								<li><a href="http://www.havehalalwilltravel.com/blog/category/travel-guide/" target="_blank">Travel Guide</a></li>
								<li><a href="http://www.havehalalwilltravel.com/blog/category/inspiration/" target="_blank">Inspiration</a></li>								
							</ul>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove_padding">
							<h4 class="titles">More</h4>
							<ul class="links">
								<li><a href="javascript:void(0)">Contact Us</a></li>
								<li><a href="javascript:void(0)">About Us</a></li>
								<li><a href="javascript:void(0)">Advertise With Us</a></li>								
							</ul>
						</div>
					</div>
					<!-- follow -->
					<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 remove_padding follow">
						<h4>Follow Us</h4>
						<div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-4 col-sm-offset-0 col-sm-4 col-xs-offset-3  col-xs-2">
							<a href="{{FbLink}}" target="_blank"><i class="fa fa-facebook-f social_fb"></i></a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
							<a href="{{Instagram}}" target="_blank"><i class="fa fa-instagram social"></i></a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
							<a href="javascript:void(0)"><i class="fa fa-twitter social"></i></a>
						</div>
					</div>
					<!-- app -->
					<div class="col-lg-3 col-md-3 col-sm-4 hidden-xs remove_padding download">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<h4>Download Our Mobile App</h4>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<a class="footer_applink" href="{{IOSAppUrl}}" target="_blank"><img src="assets/images/ios_footer_btn.png" alt="IOS APP Button1" title="IOS APP Button1"></a>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<a class="footer_applink" target="_blank" href="{{AnroidPlayUrl}}"><img src="assets/images/android_footer_btn.png"  alt="Android APP Button1" title="Android APP Button1"></a>
						</div>
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer_logo remove_padding">
						<img src="assets/images/footer_logo.png"  alt="Footer Logo" title="Footer Logo">
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  copyright remove_padding">
						<p>&copy; 2017 Hello Travel Pte Ltd.All Rights Reserved.<p>
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 agree  copyright remove_padding">
						<a href="http://www.havehalalwilltravel.com/end-user-license-agreement/" target="_blank">End User License Agreement</a>
						<span class="seperator">|</span>
						<a href="http://www.havehalalwilltravel.com/privacy-policy/" target="_blank">Privacy Policy</a>
					</div>
				</div>
			</div>
		</div>
	</div>`,
  styleUrls: ['./app.component.css'],
})
export class FooterComponent {
  title = 'Tour of Heroes';
  IOSAppUrl= environment.IOSAppUrl;
  AnroidPlayUrl= environment.AnroidPlayUrl ;
  FbLink = environment.FbLink;
  Instagram= environment.Instagram;
}
