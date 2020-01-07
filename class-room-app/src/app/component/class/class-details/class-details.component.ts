import { Component, OnInit } from '@angular/core';
import { ClassRoom } from '../../../model/ClassRoom';
import { ClassService } from '../../../service/class.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
  id: number;
  classRoom: ClassRoom;

  constructor(
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.classRoom = new ClassRoom();
    this.id = this.route.snapshot.params.id;
    this.classService.getClassRoom(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.classRoom = data;
        },
        error => console.log(error)
      );
  }

  listClass() {
    return this.router.navigate(['/student']);
  }

}
