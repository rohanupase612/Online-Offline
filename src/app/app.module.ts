import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineStatusModule } from 'ngx-online-status';
import { InternetComponent } from './internet/internet.component';

@NgModule({
  declarations: [
    AppComponent,
    InternetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
