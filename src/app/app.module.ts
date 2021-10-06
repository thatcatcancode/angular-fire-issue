import { InjectionToken, NgModule } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Database, getDatabase } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './firebase.service';

export const FIREBASE_APP_TOKEN = new InjectionToken<Database>('firebase.app')
export const FIREBASE_SERVICE = new InjectionToken<FirebaseService>(
  'firebase.service'
)


export function createFirebase() {
  const app = initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  })
  return getDatabase(app)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: FIREBASE_APP_TOKEN,
      useFactory: createFirebase
    },
    {
      provide: FIREBASE_SERVICE,
      useClass: FirebaseService,
      deps: [FIREBASE_APP_TOKEN]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
