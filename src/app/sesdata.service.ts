import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SesdataService {
  selectedId = new Subject<any>();
  selectedCourse = new Subject<any>();

}