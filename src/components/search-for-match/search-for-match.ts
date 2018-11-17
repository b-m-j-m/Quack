import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

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

  constructor(public events: Events) {
    console.log('Hello SearchForMatchComponent Component');
    this.text = 'Hello World';
  }

  onDeactivate() {
    this.events.publish('modeChange', 0);
  }

  onMatch() {
    this.events.publish('modeChange', 2);
  }
  
}
