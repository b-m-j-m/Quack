import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  public withUser;
  public messages;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afAuth: AngularFireAuth) {

    let userId = afAuth.auth.currentUser.uid;
    this.withUser = navParams.data;

    let chatId = userId < this.withUser ? `${userId}-${this.withUser}` : `${this.withUser}-${userId}`;
    let chat = db.collection("messages").get()
      .subscribe(snapshots => {
        let messages = snapshots.docs.map(d => d.data()).sort((a, b) => a.time < b.time).slice(0, 100)
        this.updateMessages(messages);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  updateMessages(messages) {
    this.messages = messages;
  }

  sendMessage(text) {

    let userId = this.afAuth.auth.currentUser.uid;

    let chatId = userId < this.withUser ? `${userId}-${this.withUser}` : `${this.withUser}-${userId}`;

    let message = {
      body: text,
      sender: userId,
      time: new Date(),
      chatId
    }

    this.db.collection("messages").add(message);

  }

}
