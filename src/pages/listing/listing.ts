import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Jsonp } from '@angular/http';
import { ListingDetailsPage } from '../listing-details/listing-details';
import { ApplyPage } from '../apply/apply';
import {JobModalPage} from '../job-modal/job-modal';

/**
 * Generated class for the ListingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',

})
export class ListingPage {
    paramWhat: string;
    paramWhere: string;
    paramCategory: string;
    jobs = [];
    members = [];
    data = [];
    jobID: any;
    startPoint: number = 0;
    sendAmount: number = 1000;
      private start:number=0;
      private end:number=10;
      showFailMsg: boolean = false;

   

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public jsonp: Jsonp, public modalCrtl: ModalController) {
        this.paramWhat = navParams.get('paramWhat');
        this.paramWhere = navParams.get('paramWhere');
        this.paramCategory = navParams.get('paramCategory');

        this.submit();
    

    }

   doInfinite(infiniteScroll) {
  

    console.log('Begin async operation');
    
    setTimeout(() => {
  
    for (let i = this.start; i <= this.start + this.end ; i++) {
      this.jobs.push( this.data[i] );          
    }
    
     this.start += this.end ;
     this.end += this.end;


      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

submit() {
if(this.paramWhat == "" && this.paramWhere == "" && this.paramCategory == ""){
 this.showFailMsg = true; 
}
else{
  var link = 'http://www.hiremaster.com/custScripts/ionicApp/api.php';
  var myData = JSON.stringify({what: this.paramWhat, where: this.paramWhere, cat: this.paramCategory, startPoint: this.startPoint, sendAmount: this.sendAmount});
  
  this.http.post(link, myData)
  .subscribe(data => {
  var jobData = JSON.parse(data["_body"]);
  this.data = jobData.jobList;
 //console.log(data["_body"]);
  console.log(this.data);
 if (this.startPoint == 0){
    var initialLoad = jobData.jobList; 
     for (let i = this.startPoint; i < this.end; i++) {
      this.jobs.push( initialLoad[i] );
        
    }}
this.start += this.end -1;    

  }, error => {
  this.showFailMsg = true;
  console.log("Well Shit!");
  });
  }

  }




openDetails(){
  this.navCtrl.push(ListingDetailsPage);
}

openApply(charNum){
  this.navCtrl.push(ApplyPage, charNum);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
  }

  openModal(charNum){
  let jobModal = this.modalCrtl.create(JobModalPage, charNum)
  jobModal.present();
  }

}
