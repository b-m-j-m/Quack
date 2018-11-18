import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
//import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  // state variable defines if page is in
  // 0 -> inactive
  // 1 -> searching for match
  // 2 -> match found
  public state = 0;
  public matchedUser;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, db: AngularFirestore, afAuth: AngularFireAuth/*, geolocation: BackgroundGeolocation*/) {

    events.subscribe('modeChange', (newState) => {

      db.collection("users").doc(afAuth.auth.currentUser.uid).set({
        awaitingMatch: newState == 1
      }, {merge: true});

      if (newState == 1) {
      //  geolocation.start();
      } else {
      //geolocation.stop();
      }

      if (newState == 1) {
        db.collection("users").doc(afAuth.auth.currentUser.uid).collection("matchings").snapshotChanges()
          .subscribe(snapshots => {
            console.log(snapshots);
            snapshots.filter(c => c.type == "added").forEach(({payload}) => {

              this.matchedUser = {
                id: payload.doc.id,
                ...payload.doc.data()
              };

              events.publish('modeChange', 2);
            });
          });
      }

      this.state = newState;

  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
