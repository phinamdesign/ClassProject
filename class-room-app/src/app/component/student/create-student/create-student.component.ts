import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Student } from '../../../model/Student';
import { StudentService } from '../../../service/student.service';
import { ClassRoom } from '../../../model/ClassRoom';
import { ClassService } from '../../../service/class.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  submitted = false;
  classRoom: ClassRoom;
  constructor(
    private router: Router,
    private studentService: StudentService
  ) {}


  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/student']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
