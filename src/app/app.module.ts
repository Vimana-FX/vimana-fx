import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App } from './app';
import {  DashboardComponent } from './components/dashboard/dashboard';
import { HomePage } from './components/home-page/home-page';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    CardModule,
    App
  ],
  providers: []
})
export class AppModule { }
