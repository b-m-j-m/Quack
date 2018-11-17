import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFirestore } from '@angular/fire/firestore';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import { MainPage } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, geolocation: BackgroundGeolocation, db: AngularFirestore) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      geolocation.configure({
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
          })
        .subscribe((location: BackgroundGeolocationResponse) => {

          console.log(location);

          db.collection('users').doc("kilian").set({
            location: {
              latitude: location.latitude,
              longitude: location.longitude,
              bearing: location.bearing
            }
          }, {merge: true});

          geolocation.finish();
        });
    });
  }
}
