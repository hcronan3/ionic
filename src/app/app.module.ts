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
