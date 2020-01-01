import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  myCourses = [ 
    {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"Angular","courseSummary":"Angular is a platform for building mobile and desktop web applications."},
    {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"Node","courseSummary":"React is a declarative, efficient JavaScript library for building interfaces."},    {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"VueJs","courseSummary":"Abc"},
    {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"MangoDB","courseSummary":"Abc"}
    ];
  

    constructor(private router: Router) { }

    onSelect(course){
      sessionStorage.setItem('selectedCourse',course.courseName);

      this.router.navigate(['/courseList']);
    }
  ngOnInit() {
  }

}
