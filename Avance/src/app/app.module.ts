import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWD_S-ixA0gQn6pWEMQl81Juvj6FlU1F0",
  authDomain: "sistema-unidad-terrritorial.firebaseapp.com",
  projectId: "sistema-unidad-terrritorial",
  storageBucket: "sistema-unidad-terrritorial.appspot.com",
  messagingSenderId: "110154609263",
  appId: "1:110154609263:web:07ffec8194534c5fca539a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);