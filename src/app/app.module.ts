import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingCmp } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';


import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { ProfilePage } from '../pages/profile/profile';
import { ChatListPage } from '../pages/chat-list/chat-list';
import { ChatPage } from '../pages/chat/chat';
import { ComponentsModule } from '../components/components.module';

// GEOLOCATION
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ProfilePage,
    ChatListPage,
    ChatPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, 'hackatum'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireMessagingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ProfilePage,
    ChatListPage,
    ChatPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // BackgroundGeolocation

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
