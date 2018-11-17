import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result) {

      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token, user);

    }).catch(function(error) {
      console.log(error);
    });
  }

}
