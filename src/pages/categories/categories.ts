import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListingPage } from '../listing/listing';
/**
 * Generated class for the CategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
param: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param =  this.navParams.get('param');
     console.log(this.param);
  }
   pushParams() {
        this.navCtrl.push(ListingPage, {'param' : this.param});
     
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
