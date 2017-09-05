import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { CategoryPage } from '../category/category';
import { FacilityDetailPage } from '../facility-detail/facility-detail';
import { FacilityGokhaPage } from '../facility-gokha/facility-gokha';
import { FacilityLibraryPage } from '../facility-library/facility-library';
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  siteMap:string = "SITE MAP";
  basement:string = "BASEMENT";
  underground:string = "UNDERGROUND";
  ground:string = "GROUND";
  mapView:string = this.siteMap;
  
  map_list;
  site_img;
  basement_img;
  ground_img;

  info_list;
  site_contact_info:Array<any> = [];
  site_fee_info:Array<any> = [];

  basement_hall_info:Array<any> = [];
  basement_others_info:Array<any> = [];
  
  ground_hall_info:Array<any> = [];
  ground_facility_info:Array<any> = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http:Http) {
        this.http.get('http://localhost:3000/maps/')
        .subscribe(
        data =>
        {
          this.map_list = data.json();
          for(let index = 0; index < this.map_list.length; index++)
          {
            var map_name = this.map_list[index].map_name;
            console.log(data.json());
            switch(map_name){
              case this.siteMap: this.site_img = this.map_list[index].map_img;
                                  break;
              case this.underground: this.basement_img = this.map_list[index].map_img;
                                  break;
              case this.ground: this.ground_img = this.map_list[index].map_img;
                                  break;                                          
            }
          }
       },
        error =>
        {
          console.log("error");
        });

        this.http.get('http://localhost:3000/maps/info')
        .subscribe(
        data =>
        {
          this.info_list = data.json();
          for(let index = 0; index < this.info_list.length; index++)
          {
            var map_name = this.info_list[index].map_name;
            var info_type = this.info_list[index].info_type;
            switch(map_name)
            {
              case this.siteMap: 
                    if(info_type == "contact")
                    {
                      this.site_contact_info.push(this.info_list[index]);
                    }else if(info_type == "fee")
                    {
                      this.site_fee_info.push(this.info_list[index]);
                    }
                    break;
              case this.underground: 
                    if(info_type == "hall")
                    {
                      this.basement_hall_info.push(this.info_list[index]);
                    }else if(info_type == "others")
                    {
                      this.basement_others_info.push(this.info_list[index]);
                    }
                    break;
              case this.ground:
                    if(info_type == "hall")
                    {
                      this.ground_hall_info.push(this.info_list[index]);
                    }else if(info_type == "facility")
                    {
                      this.ground_facility_info.push(this.info_list[index]);
                    }
                    break;                                         
            }
          }
        },
        error =>
        {
          console.log("error");
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

    gotoSearch()
    {
        this.navCtrl.push("SearchPage");
    }

  navHome()
  {
    this.navCtrl.push("HomePage");
  }

}
