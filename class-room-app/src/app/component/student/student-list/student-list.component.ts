import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/Student';
import { StudentService } from '../../../service/student.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  reloadData() {
    this.students = this.studentService.getListStudent();
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  studentDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
