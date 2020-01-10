import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { appRouting } from "./app.routes";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
