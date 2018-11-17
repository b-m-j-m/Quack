import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MainPage } from '../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public db: AngularFirestore) {
    afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        navCtrl.setRoot(MainPage);
      }
    }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {

    this.afAuth.auth.setPersistence(auth.Auth.Persistence.LOCAL)
    .then(() => this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))
    .then((result) => {

      this.db.collection("users").doc(result.user.uid).set({
        name: result.user.displayName, awaitingMatch: false, profile: ""
      })

      this.navCtrl.setRoot(MainPage);

    }).catch(function(error) {
      console.log(error);
    });
  }

}
