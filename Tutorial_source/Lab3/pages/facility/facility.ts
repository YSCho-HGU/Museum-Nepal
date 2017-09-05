import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { FacilityDetailPage } from '../facility-detail/facility-detail';
import { SearchPage } from '../search/search';
/**
 * Generated class for the FacilityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-facility',
  templateUrl: 'facility.html',
})
export class FacilityPage {
public facility:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
        this.http.get('http://localhost:3000/facility/')
        .subscribe(
        data =>
        {
          this.facility = data.json();
          console.log(this.facility);
        },
        error =>
        {
          console.log("error");
        });  

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityPage');
  }
  gotoDetail(name){
    if(name=="Library"){
      this.navCtrl.push("FacilityLibraryPage", {
        facilityName:name});
    }else if(name == "Gorkha Village Restaurant")
    {
      this.navCtrl.push("FacilityGokhaPage", {
        facilityName:name });
    }else{
      this.navCtrl.push("FacilityDetailPage", {
        facilityName:name});
    }
  }


  gotoSearch(){
    this.navCtrl.push("SearchPage");
  }
  
}
