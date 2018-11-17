import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { IonicModule } from 'ionic-angular';
import { SearchForMatchComponent } from './search-for-match/search-for-match';
import { SearchForMatchDisabledComponent } from './search-for-match-disabled/search-for-match-disabled';
import { MatchFoundComponent } from './match-found/match-found';
@NgModule({
	declarations: [NavigationComponent,
    SearchForMatchComponent,
    SearchForMatchDisabledComponent,
    MatchFoundComponent],
	imports: [IonicModule],
	exports: [NavigationComponent,
    SearchForMatchComponent,
    SearchForMatchDisabledComponent,
    MatchFoundComponent]
})
export class ComponentsModule {}
