import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, afAuth: AngularFireAuth, public db: AngularFirestore) {

    db.collection("users").doc(afAuth.auth.currentUser.uid).get()
      .subscribe(snapshot => {
        let data = snapshot.data();
        this.user = {
          id: snapshot.id,
          name: data.name,
          profile: data.profile.length > 1 ? data.profile : 'assets/imgs/avatar-horst.jpg'
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
