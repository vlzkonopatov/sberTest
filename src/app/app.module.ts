import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosuggestComponent } from './autosuggest';
import { ReactiveFormsModule } from '@angular/forms';
import { MyButtonDirective, MyInputDirective, PhoneMaskDirective } from './directive';
import { ApiService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AutosuggestComponent,
    MyInputDirective,
    MyButtonDirective,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
