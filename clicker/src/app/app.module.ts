import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickAreaComponent } from './click-area/click-area.component';
import { UpgradeAreaComponent } from './upgrade-area/upgrade-area.component';
import { GraphicAreaComponent } from './graphic-area/graphic-area.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClickAreaComponent,
    UpgradeAreaComponent,
    GraphicAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
