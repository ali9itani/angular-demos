import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdHostDirective } from './ad-host.directive';
import { FirstAdComponent } from './first-ad/first-ad.component';
import { SecondAdComponent } from './second-ad/second-ad.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AdHostDirective, FirstAdComponent, SecondAdComponent ],
  entryComponents: [ FirstAdComponent, SecondAdComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
