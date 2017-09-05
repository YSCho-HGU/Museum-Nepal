import {Component} from '@angular/core';
import {NavController,IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';
import { Http, HttpModule } from '@angular/http';
import { AboutUsPage } from '../about-us/about-us';
import { NewsPage } from '../news/news';
import { FacilityPage } from '../facility/facility';
import { SearchPage } from '../search/search';
import {MapPage} from '../map/map';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Service]
})
export class HomePage {
    // categories: any[] = [];
    // featured: any[] = [];
    // cartItems: any[];
    // noOfItems: number;

    main_icon:any[] = [{"icon_img":"assets\\img\\about-02.png"}, 
                        {"icon_img":"assets\\img\\Exhibition-02.png"},
                        {"icon_img":"assets\\img\\Map-02.png"},
                        {"icon_img":"assets\\img\\Facilities-02.png"}];
    main_img:any;
    
    constructor(public navCtrl: NavController, public service: Service, public http:Http) {
        this.http.get('http://localhost:3000/main')
        .subscribe(
        data =>
        {
          this.main_img = data.json();
          console.log(this.main_img);
       
        },
        error =>
        {
          console.log("error");
        });
        


        // this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        // if (this.cartItems != null) {
        //     this.noOfItems = this.cartItems.length;
        // }
        // this.service.getData()
        //     .subscribe((response) => {
        //         this.categories = response.categories;
        //         this.featured = response.featured;
        //     })
    }

    navigate(MenuId) {
        this.navCtrl.push("ProductListPage",
            {MenuId: MenuId}
        );
    }

    navcart() {
        this.navCtrl.push("CartPage");
    }

    navAbout()
    {
        this.navCtrl.push("AboutUsPage");
    }

   navExhibition(){
        this.navCtrl.push("NewsPage");
    }

    navFacility(){
        this.navCtrl.push("FacilityPage");
    }

    gotoSearch(){
        this.navCtrl.push("SearchPage");
    }
    
    navMap(){
        this.navCtrl.push("MapPage");
    }
}
