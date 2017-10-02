import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListingPage } from '../pages/listing/listing';
import { CategoriesPage } from '../pages/categories/categories';
import { ListingDetailsPage } from '../pages/listing-details/listing-details';
import { ApplyPage } from '../pages/apply/apply';
import {JobModalPage} from '../pages/job-modal/job-modal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

// Import the AF2 Module
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCFOdfUm_TAdr7LD84o8pYQ09mA7SP77Ko",
  authDomain: "",
  databaseURL: "https://hiremaster-5874d.firebaseio.com/",
  storageBucket: "hiremaster-5874d.appspot.com",
  messagingSenderId: "245785013499"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListingPage,
    ListingDetailsPage,
    ApplyPage,
    CategoriesPage,
    JobModalPage
  ],
  imports: [
      BrowserModule,
      HttpModule,
      JsonpModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ListPage,
      ListingPage,
      ListingDetailsPage,
      ApplyPage,
      CategoriesPage,
      JobModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
    
  ]
})
export class AppModule {}
