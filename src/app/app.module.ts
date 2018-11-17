import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { ProfilePage } from '../pages/profile/profile';
import { ChatListPage } from '../pages/chat-list/chat-list';
import { ChatPage } from '../pages/chat/chat';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ProfilePage,
    ChatListPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ProfilePage,
    ChatListPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
