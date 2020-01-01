import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ContentComponent } from './content/content.component';
import {NavService} from './nav.service';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { SesdataService } from './sesdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ChapterListComponent,
    ContentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavService,SesdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
