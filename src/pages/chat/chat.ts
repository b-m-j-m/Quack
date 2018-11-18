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
  public newMessage = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afAuth: AngularFireAuth) {

    let userId = afAuth.auth.currentUser.uid;
    this.withUser = navParams.data;

    let chatId = userId < this.withUser ? `${userId}-${this.withUser}` : `${this.withUser}-${userId}`;
    db.collection("messages").snapshotChanges()
      .subscribe(snapshots => {
        console.log(snapshots);
        let messages = snapshots.map(s => <any>s.payload.doc.data()).filter(m => m.chatId == chatId).sort((a, b) => a.time.seconds - b.time.seconds)
        this.updateMessages(messages.map(m => ({...m, time: new Date(m.time.seconds*1000)})).slice(0, 100));
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  updateMessages(messages) {
    this.messages = messages;
  }

  sendMessage() {

    let userId = this.afAuth.auth.currentUser.uid;

    let chatId = userId < this.withUser ? `${userId}-${this.withUser}` : `${this.withUser}-${userId}`;

    let message = {
      body: this.newMessage,
      sender: userId,
      time: new Date(),
      chatId
    }

    this.db.collection("messages").add(message);

    this.newMessage = "";

  }

}
