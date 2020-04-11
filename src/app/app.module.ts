import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CardService } from './card.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
  
import { BasicHighlightDirective } from './basic-highlight.directive';
import { MyCardComponent } from './my-card/my-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
