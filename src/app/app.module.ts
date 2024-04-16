import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomPipe } from './custom.pipe';
import { CardComponent } from './card/card.component';
import { Ipl2024Component } from './ipl2024/ipl2024.component';
import { TimePipe } from './time.pipe';
import { SlwComponent } from './slw/slw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomPipe,
    CardComponent,
    Ipl2024Component,
    TimePipe,
    SlwComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
