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
 companyName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.jobId = this.navParams.get("jobId");
  }
 apply = {}
  logForm() {
  console.log(this.jobId);
    console.log(this.apply)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

}
