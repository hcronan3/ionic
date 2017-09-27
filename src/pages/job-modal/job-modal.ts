import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the JobModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-modal',
  templateUrl: 'job-modal.html',
})
export class JobModalPage {
jobID: any;
data: any;
job: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  this.job = this.navParams.get('job');
  console.log(this.job);
  
}
  




  ionViewDidLoad() {
    console.log('ionViewDidLoad JobModalPage');
  }

}
