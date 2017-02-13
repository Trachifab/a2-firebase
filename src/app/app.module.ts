import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDlqxdk5ay3gfP9sO8qvhZSFwoRhDSzWD8",
    authDomain: "a2-firebase-84a3d.firebaseapp.com",
    databaseURL: "https://a2-firebase-84a3d.firebaseio.com",
    storageBucket: "a2-firebase-84a3d.appspot.com",
    messagingSenderId: "443664095016"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
