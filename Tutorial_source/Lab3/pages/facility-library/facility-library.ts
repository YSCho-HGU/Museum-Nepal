import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';

/**
 * Generated class for the FacilityLibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-facility-library',
  templateUrl: 'facility-library.html',
})
export class FacilityLibraryPage {
  facilityName:any;
  library:any;
  library_data_1:Array<any>=[];
  library_data_2:Array<any>=[];
  library_img:any;
  index:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.facilityName = navParams.get("facilityName");
    console.log(this.facilityName);  
    this.http.get('http://localhost:3000/facility/'+this.facilityName)
        .subscribe(
        data =>
        {
          this.library = data.json();
          for (this.index = 1; this.index < Math.floor(this.library.length/2) + 1; this.index++) {
               this.library_data_1.push(this.library[this.index].lib_name);
          }
          for (; this.index < this.library.length; this.index++) {
               this.library_data_2.push(this.library[this.index].lib_name);
          }
          console.log(this.library.length);
          
          this.library_img = this.library[0].lib_img;
          console.log(this.library_data_1);
          console.log(this.library_data_2);
        },
        error =>
        {
          console.log("error");
        });  

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityLibraryPage');
  }

}
