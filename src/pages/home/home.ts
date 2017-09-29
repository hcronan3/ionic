import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListingPage } from '../listing/listing';
import { CategoriesPage } from '../categories/categories';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    paramWhat: string = '';
    paramWhere: string = '';
    paramCategory: string = '';
      public items : any = [];

    constructor(public navCtrl: NavController, private http: Http, public jsonp: Jsonp, private geolocation: Geolocation) {
   
    }
    pushParams() {
        this.navCtrl.push(ListingPage, { 'paramWhat': this.paramWhat, 'paramWhere': this.paramWhere, 'paramCategory': this.paramCategory });
        console.log(this.paramWhat, this.paramWhere, this.paramCategory);
    }

    submit() {
  var link = 'http://www.hiremaster.com/custScripts/ionicApp/api.php';
    var myData = JSON.stringify({what: this.paramWhat, where: this.paramWhere, cat: this.paramCategory});
    
    this.http.post(link, myData)
    .subscribe(data => {
    console.log(data["_body"]);
    }, error => {
    console.log("Well Shit!");
    });
  }
     pushCategories() {
        this.navCtrl.push(CategoriesPage, {});
    
    }
    searchNearMe(){
    console.log("init");
        this.geolocation.getCurrentPosition().then((resp) => {
        console.log("in then");
 // resp.coords.latitude
 // resp.coords.longitude
    alert(resp.coords.latitude, resp.coords.longitude);
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 console.log(data.coords.latitude);
 // data.coords.longitude
});
    }

}
