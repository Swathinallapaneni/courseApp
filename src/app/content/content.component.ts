import { Component, OnInit, SimpleChanges  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SesdataService } from '../sesdata.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public check =false;
  id:number;
  selectedCourse: any;
  public selectedId=1;

  constructor(private route: ActivatedRoute, private router: Router, private sData:SesdataService) {
    this.sData.selectedId.subscribe(id =>{
      this.selectedId =id;      
   });
   
  }

  ngOnInit() {
    this.selectedCourse = sessionStorage.getItem('selectedCourse')
  }

  
}
