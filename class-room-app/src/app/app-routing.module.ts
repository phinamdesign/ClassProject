import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './component/student/student-list/student-list.component';
import {CreateStudentComponent} from './component/student/create-student/create-student.component';
import {UpdateStudentComponent} from './component/student/update-student/update-student.component';
import {StudentDetailsComponent} from './component/student/student-details/student-details.component';
import {ClassListComponent} from './component/class/class-list/class-list.component';
import {CreateClassComponent} from './component/class/create-class/create-class.component';
import {UpdateClassComponent} from './component/class/update-class/update-class.component';
import {ClassDetailsComponent} from './component/class/class-details/class-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },

  { path: 'class', component: ClassListComponent },
  { path: 'addClass', component: CreateClassComponent },
  { path: 'updateClass/:id', component: UpdateClassComponent },
  { path: 'detailsClass/:id', component: ClassDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
