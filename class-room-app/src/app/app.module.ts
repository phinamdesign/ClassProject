import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './component/student/create-student/create-student.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentDetailsComponent } from './component/student/student-details/student-details.component';
import { UpdateStudentComponent } from './component/student/update-student/update-student.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateClassComponent } from './component/class/create-class/create-class.component';
import { UpdateClassComponent } from './component/class/update-class/update-class.component';
import { ClassListComponent } from './component/class/class-list/class-list.component';
import { ClassDetailsComponent } from './component/class/class-details/class-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    CreateClassComponent,
    UpdateClassComponent,
    ClassListComponent,
    ClassDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
