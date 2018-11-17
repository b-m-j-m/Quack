import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../pages/chat/chat';

/**
 * Generated class for the MatchFoundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'match-found',
  templateUrl: 'match-found.html'
})
export class MatchFoundComponent {

  text: string;

  constructor( public navCtrl: NavController) {
    console.log('Hello MatchFoundComponent Component');
    this.text = 'Hello World';
  }

  onStartChat() {
    this.navCtrl.push(ChatPage);
  }
}
