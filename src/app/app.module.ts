import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresenterComponent } from './presenter/presenter.component';
import { NodeComponent } from './presenter/node/node.component';

@NgModule({
  declarations: [AppComponent, PresenterComponent, NodeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
