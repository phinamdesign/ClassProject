import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../service/class.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {ClassRoom} from '../../../model/ClassRoom';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classRooms: Observable<ClassRoom[]>;

  constructor(
    private classService: ClassService,
    private router: Router
  ) { }

  reloadData() {
    this.classRooms = this.classService.getListClassRoom();
  }
  ngOnInit() {
    this.reloadData();
  }

  deleteClassRoom(id: number) {
    this.classService.deleteClassRoom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  classRoomDetails(id: number) {
    this.router.navigate(['detailsClass', id]);
  }

}
