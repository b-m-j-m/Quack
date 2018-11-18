import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

/**
 * Generated class for the ChatListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {

  public chats;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afAuth: AngularFireAuth) {

    this.db.collection("users").doc(afAuth.auth.currentUser.uid).collection("matchings").snapshotChanges()
      .subscribe(snapshots => {
        let chats = snapshots.map(s => <any>s.payload.doc).map(d => ({
          id: d.id,
          ...d.data()
        }))
        this.updateChatList(chats);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatListPage');
  }

  onOpenChat(withUser) {
    this.navCtrl.push(ChatPage, withUser);
  }

  updateChatList(chats) {
    this.chats = chats;
  }

}
