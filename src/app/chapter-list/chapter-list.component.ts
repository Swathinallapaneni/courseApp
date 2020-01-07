import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SesdataService } from '../sesdata.service';




@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  public courseName:any;
  public selectedId:any;
  istoggle:boolean=true;
  isSelected:boolean=false;
  public angularChapters=[
    {"id":1,"name":"Binding"},
    {"id":2,"name":"Routing"},
    {"id":3,"name":"Services"}
    ];
    public reactChapters=[
    {"id":1,"name":"Forms"},
    {"id":2,"name":"LifeCycle"},
    {"id":3,"name":"States"}
    ];
    public vueJsChapters=[
    {"id":1,"name":"Events"},
    {"id":2,"name":"LifeCycle"},
    {"id":3,"name":"binding"}
    ];
    public MongoDbChapters=[
    {"id":1,"name":"Collection"},
    {"id":2,"name":"Document"},
    {"1id":3,"name":"Json"}
    ];
    myn=true;
    public jump = "course";
    
     

  constructor( private router: Router, private sData: SesdataService,activeroute:ActivatedRoute) {
    
  
   }

  onAngSelect(angChapter){
    this.router.navigate(['/courseList/coursedetails', angChapter.id]);
    //this.sData.selectedId.next(angChapter.id);  
    this.isSelected=true;
    this.myn=false;
    this.jump="courseList";
    sessionStorage.setItem('myval','true');
  }

  onReactSelect(reactChapter){
    this.router.navigate(['/courseList/coursedetails',reactChapter.id]);
    this.isSelected=true;
    this.myn=false;
    this.jump="courseList";
    sessionStorage.setItem('myval','true');
  }

  onVueSelect(vueChapter){
    this.router.navigate(['/courseList/coursedetails',vueChapter.id]);
    this.isSelected=true;
    this.myn=false;
    this.jump="courseList";
    sessionStorage.setItem('myval','true');
  }
  onMongoSelect(mongoChapter){
    this.router.navigate(['/courseList/coursedetails',mongoChapter.id]);
    this.isSelected=true;
    this.myn=false;
    this.jump="courseList";
    sessionStorage.setItem('myval','true');
  }

  ngOnInit() {
    this.courseName= sessionStorage.getItem('selectedCourse');   
    this.isSelected=!!sessionStorage.getItem('myval');
    sessionStorage.removeItem('myval');
  }
    
  toggle()
  {
    this.istoggle= false;
    this.isSelected= false;
    this.myn=true;
    this.jump="course"
    sessionStorage.removeItem('myval');


  }
 

}
