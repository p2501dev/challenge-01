import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresenterComponent } from './presenter/presenter.component';
import { NodeComponent } from './presenter/components/node/node.component';
import { InputNumberComponent } from './presenter/components/input-number/input-number.component';
import { InputBooleanComponent } from './presenter/components/input-boolean/input-boolean.component';
import { InputStringComponent } from './presenter/components/input-string/input-string.component';

@NgModule({
  declarations: [
    AppComponent,
    PresenterComponent,
    NodeComponent,
    InputNumberComponent,
    InputBooleanComponent,
    InputStringComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
