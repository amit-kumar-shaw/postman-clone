import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestBuilderComponent } from './components/request-builder/request-builder.component';
import { ResponseViewerComponent } from './components/response-viewer/response-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestBuilderComponent,
    ResponseViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
