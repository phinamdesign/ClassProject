import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseUrl = 'http://localhost:8080/api/class';

  constructor(private http: HttpClient) { }

  getClassRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createClassRoom(classRoom: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, classRoom);
  }

  // tslint:disable-next-line:ban-types
  updateClassRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.http}/${id}`, value);
  }

  deleteClassRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getListClassRoom(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
