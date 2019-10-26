import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FirstChildComponent } from "./first-child/first-child.component";
import { SecondChildComponent } from "./second-child/second-child.component";
import { SecondChildChildComponent } from "./second-child/second-child-child/second-child-child.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    SecondChildChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
