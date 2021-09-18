import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { NewsComponent } from './MyComponents/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FtnapiService } from './service/ftnapi.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FtnapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
