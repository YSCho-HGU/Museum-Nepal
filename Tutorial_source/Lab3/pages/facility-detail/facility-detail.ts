import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the FacilityGokhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-facility-detail',
  templateUrl: 'facility-detail.html',
})
export class FacilityDetailPage {
  facilityName:any;
  facility_info:any;
  facility_img:any;
  img:any;
  info_type:Array<any> = [];
  info_content:Array<any> = [];
  index:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.facilityName = navParams.get("facilityName");
    console.log(this.facilityName);
    this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/facility/'+this.facilityName)
    .subscribe(
      data=>
      {
        this.facility_info = data.json();
        this.facility_img = this.facility_info[this.index++].img;
        if(this.facilityName == "Souvenir Shop")
        {
          for(  ; this.index < this.facility_info.length ; this.index++)
          {
            this.info_type.push(this.facility_info[this.index].product);
            this.info_content.push(this.facility_info[this.index].price);
          }
        }else
        {
          for(  ; this.index < this.facility_info.length ; this.index++)
          {
            this.info_type.push(this.facility_info[this.index].info_type);
            this.info_content.push(this.facility_info[this.index].info_content);
          }
        }
        // this.gokha_img = this.gokha[this.index++].Restaruant_img;
        // console.log(this.gokha_img);
        // this.capability = this.gokha[this.index++].capability;
        // console.log("index " + this.index);
        // for(  ;this.index < this.gokha.length;this.index++)
        // {
        //     this.gokha_info.push(this.gokha[this.index]);
        // }
        // console.log(this.gokha_info);

      },
      error=>
      {
        console.log("error");
      });
  }


  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad FacilityGokhaPage');
  }

}
