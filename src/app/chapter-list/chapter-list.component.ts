import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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

  public angularChapters=[
    {"id":1,"name":"Binding"},
    {"id":2,"name":"Routing"},
    {"id":3,"name":"Services"}
    ];
    public nodeChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];
    public vueJsChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];
    public MangoDbChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];
     

  constructor( private router: Router, private sData: SesdataService) {
    this.sData.selectedId.subscribe(id =>{
      this.selectedId =id;
    })
   }

  onAngSelect(angChapter){
    this.router.navigate(['/courseList/coursedetails']);
    this.sData.selectedId.next(angChapter.id);  
  }

  onNodeSelect(nodeChapter){
    this.router.navigate(['/course/node',nodeChapter.id]);
  }

  ngOnInit() {
    this.courseName= sessionStorage.getItem('selectedCourse');
    
  }

  toggle()
  {
    this.istoggle= false;
  }
 

}
