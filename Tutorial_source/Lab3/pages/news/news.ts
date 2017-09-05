import {Component} from '@angular/core';
import {NavController, NavParams,IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';
import { Http } from '@angular/http';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
    selector: 'page-news',
    templateUrl: 'news.html',
    providers: [Service]
})
export class NewsPage {
    newsList: any[];
    exhibit_list:any;
    exhibit_name:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public newsService: Service,
                public http:Http) {
         this.http.get('http://localhost:3000/exhibition-list/')
        .subscribe(
        data =>
        {
          this.exhibit_list = data.json();
          this.exhibit_name = this.exhibit_list.exhibit_name
          console.log(this.exhibit_name);
          console.log(this.exhibit_list);
        },
        error =>
        {
          console.log("error");
        });

    }

    ngOnInit() {
        this.newsService.getData()
            .subscribe((response) => {
                this.newsList = response.newsList
            })
    }

    newsDetail(newsId) {
        this.navCtrl.push("NewsDetailPage", {
            newsId: newsId
        });
    }

    gotoCategory(exhibitID){
      console.log("exhibit "+ exhibitID);
      this.navCtrl.push(CategoryPage, {ID:exhibitID});
    }

    gotoSearch()
    {
        this.navCtrl.push("SearchPage");
    }

}
