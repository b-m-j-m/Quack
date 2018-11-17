import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';

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
  public state = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, db: AngularFirestore) {

    events.subscribe('modeChange', (newState) => {
      
      this.state = newState;

  });       

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
