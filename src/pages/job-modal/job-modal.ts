import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public viewCtrl: ViewController) {
  this.job = this.navParams.get('job');
  console.log(this.job);
  
}
  
dismiss(){
   this.viewCtrl.dismiss();
 
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad JobModalPage');
  }

}
