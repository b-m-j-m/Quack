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

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afAuth: AngularFireAuth) {

    let userId = afAuth.auth.currentUser.uid;
    let withUser = "";

    let chatId = userId < withUser ? `${userId}-${withUser}` : `${withUser}-${userId}`;
    let chat = db.collection("chat").doc(chatId).collection("messages");

    chat.orderBy("time", "desc").limit(100).get()
      .then(snapshot => {
        this.loadMessages(snapshot.docs.map(d => d.data()))
      })

    chat.onSnapshot(snapshot => {
        let messages = snapshot.docChanges.filter(c => c.type == "added")
        this.appendMessages(messages.map(m => m.doc.data()));
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  loadMessages(messages) {
    // ...
  }

  appendMessages(messages) {
    // ...
  }

  sendMessage(text, toUser) {

    let userId = this.afAuth.auth.currentUser.uid;

    let message = {
      body: text,
      sender: userId,
      time: new Date()
    }

    let chatId = userId < toUser ? `${userId}-${toUser}` : `${toUser}-${userId}`;
    let chat = this.db.collection("chat").doc(chatId).collection("messages");

    chat.add(message);

  }

}
