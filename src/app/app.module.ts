import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { NodeComponent } from './node/node.component';
import { InputNumberComponent } from './node/components/input-number/input-number.component';
import { InputBooleanComponent } from './node/components/input-boolean/input-boolean.component';
import { InputStringComponent } from './node/components/input-string/input-string.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    InputNumberComponent,
    InputBooleanComponent,
    InputStringComponent,
    FormComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
