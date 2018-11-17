import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the SearchForMatchDisabledComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-for-match-disabled',
  templateUrl: 'search-for-match-disabled.html'
})
export class SearchForMatchDisabledComponent {


  constructor(public events: Events) {
    console.log('Hello SearchForMatchDisabledComponent Component');
  }

  onActivate() {
    this.events.publish('modeChange', 1);
  }

}
