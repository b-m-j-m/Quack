import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile';
import { ChatListPage } from '../../pages/chat-list/chat-list';

/**
 * Generated class for the NavigationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NavigationComponent Component');
    this.text = 'Hello World';
  }

  openPage(page: string) {
    if (page == 'profile') {
      this.navCtrl.push(ProfilePage);
    } else if (page == 'chats') {
      this.navCtrl.push(ChatListPage);
    } else {
      console.log("Page you want to push does not exist. Check navigation.html.")
    }
  }

}
