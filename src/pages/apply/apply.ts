import { Component, NgZone  } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
declare var networkinterface: any;
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
 jobId:any;
 companyId:any;
apply = {
  jobId: "",
  companyId: ""
};
  wifiIP: string = "0.0.0.0";
  cellIP: string = "0.0.0.0";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public alertCtrl: AlertController, private _ngZone: NgZone) {
  this.job = this.navParams.get('job');
  this.jobId = this.job.real_job_id;
  this.companyId = this.job.company_mongo_id;
}


  logForm(form) {
 this.apply.jobId = this.jobId;
 this.apply.companyId = this.companyId;
     var link = 'http://www.hiremaster.com/custScripts/ionicApp/applicationAPI.php';
  var myData = JSON.stringify(this.apply);
  console.log(myData);
  this.http.post(link, myData)
  .subscribe(data => {
  console.log(data);
  var jobData = JSON.parse(data["_body"]);
  
 this.presentAlertSuccess();
  }, error => {
this.presentAlertFail();
  console.log("Well Shit!");
  });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

  presentAlertSuccess() {
  const alert = this.alertCtrl.create({
    title: 'Success!',
    subTitle: 'Your application was submitted successfully!',
    buttons: ['Dismiss']
  });
  alert.present();
}
presentAlertFail() {
  const alert = this.alertCtrl.create({
    title: 'Error!',
    subTitle: 'There was an error while submitting your application. Please try again!',
    buttons: ['Dismiss']
  });
  alert.present();
}


}
