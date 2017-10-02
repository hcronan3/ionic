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
 job:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.job = this.navParams.get('job');
  console.log(this.job.real_job_id);
  console.log(this.job.company_mongo_id);
  }
 apply = {}
  logForm() {
  //console.log(this.job);
    console.log(this.apply)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

}
