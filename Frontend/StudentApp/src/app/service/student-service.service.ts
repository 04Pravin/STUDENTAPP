import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string = 'http://localhost:8081/student-api/students/';

  getAll():Observable<Student[]>{
    return this._httpClient.get<Student[]>(this.baseUrl);
  }

  getById(id:number):Observable<Student>{
    return this._httpClient.get<Student>(this.baseUrl+id);
  }

  addStudent(student:Student){
    return this._httpClient.post<Student>(this.baseUrl,student);
  }

  delete(id:number){
    return this._httpClient.delete<Student>(this.baseUrl+'id/'+id);
  }
}
