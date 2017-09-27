import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 apply = {}
  logForm() {
    console.log(this.apply)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

}
