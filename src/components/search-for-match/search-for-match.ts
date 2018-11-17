import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the SearchForMatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-for-match',
  templateUrl: 'search-for-match.html'
})
export class SearchForMatchComponent {

  text: string;

  constructor(public events: Events, fcm: FCM) {
    console.log('Hello SearchForMatchComponent Component');
    this.text = 'Hello World';

    fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
      this.events.publish('modeChange', 2);
    });
  }

  onDeactivate() {
    this.events.publish('modeChange', 0);
  }

  onMatch() {
    this.events.publish('modeChange', 2);
  }

}
