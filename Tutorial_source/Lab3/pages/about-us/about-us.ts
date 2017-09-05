import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams,IonicPage} from 'ionic-angular';
import {Nav, Platform} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Http } from '@angular/http';
import { SearchPage } from '../search/search';


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
  providers:[EmailComposer]
})
export class AboutUsPage {

 @ViewChild(Slides) slides: Slides;
	
    @ViewChild(Nav) nav: Nav;
    contactNo:any=7376421282;
  
  public info_description;
  public info_data:any;
  public info_img:string;
  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public emailComposer:EmailComposer,
              public http:Http)
{
    this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/museum/')
        .subscribe(
        data =>
        {
          this.info_description = data.json();
          console.log(this.info_description);
          this.info_data = this.info_description[0].info;
          this.info_img = this.info_description[0].info_img;
          console.log(this.info_data);
        },
        error =>
        {
          console.log("error");
        });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');

  }


   
   goToSlide() {
    this.slides.slideTo(2, 500);
  }

  callUs() {

    //   this.callNumber.callNumber(this.contactNo, true)
    // .then(() => console.log('Launched dialer!'))
    // .catch(() => console.log('Error launching dialer'));

  }

   gotogoogleMap() {
    this.navCtrl.push("LocationPage");
  }

   contact() {
     let email = {
      to: 'san10694@gmail.com',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  gotoSearch(){
    this.navCtrl.push("SearchPage");
  }
}