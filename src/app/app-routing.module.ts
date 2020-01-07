import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  
  {path:'', redirectTo:'/course', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  { path: 'course', component: CourseComponent },  
  { path: 'courseList', component: ChapterListComponent, children: [{
    path:'coursedetails/:id', component: ContentComponent
  }]},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
