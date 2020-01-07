import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/Student';
import { StudentService } from '../../../service/student.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.student = new Student();
    this.id = this.route.snapshot.params.id;
    this.studentService.getStudent(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.student = data;
        }, error => console.log(error));
  }

  listStudent() {
    this.router.navigate(['student']);
  }

}
