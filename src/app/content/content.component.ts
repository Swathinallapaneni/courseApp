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
  private sub;

  constructor(private route: ActivatedRoute, private router: Router, private sData:SesdataService) {
    
  }

  ngOnInit() {
    this.selectedCourse = sessionStorage.getItem('selectedCourse')
    this.sub= this.route.params.subscribe(params => {
      this.id=+params['id'];

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  
}
