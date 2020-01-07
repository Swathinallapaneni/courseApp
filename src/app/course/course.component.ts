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
    {"imageUrl":"https://christianliebel.com/wp-content/uploads/2016/02/Angular2-825x510.png","courseName":"Angular","courseSummary":"Angular is a platform for building mobile and desktop web applications."},
    {"imageUrl":"https://reactjs.org/logo-og.png","courseName":"React","courseSummary":"React is a efficient JavaScript library for building interfaces."}, 
    {"imageUrl":"https://miro.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg","courseName":"VueJs","courseSummary":"Vue. js is a JavaScript framework that allows you to create compelling user interfaces efficiently."},
    {"imageUrl":"https://miro.medium.com/max/3442/1*9coa1zVqfLnWHN51yMFz6g.png","courseName":"MongoDB","courseSummary":"MongoDB stores data in flexible, JSON-like documents"}
    ];
  

    constructor(private router: Router) { }

    onSelect(course){
      sessionStorage.setItem('selectedCourse',course.courseName);

      this.router.navigate(['/courseList']);
    }
  ngOnInit() {
  }

}
