import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
students!:Student[];
student!:Student;
  constructor(private _router:Router, private _studentService:StudentServiceService){}
  ngOnInit(){
    this._studentService.getAll().subscribe({
      next:(data)=>{
        this.students = data;
        console.log(this.students)},
      error:()=>console.log('Error while getting all'),
      complete:()=>console.log('Completed get all')
    })
  }

  details(student:Student){
    // this._studentService.getById(student.id).subscribe({
    //   next:(data)=>{
    //     this.student = data;
    //     console.log(this.student);
    //   },
    //   error:()=>console.log('Error while get by id'),
    //   complete:()=>{
    //     console.log('Completed get by id');
      this._router.navigate(['/detail',student.id])}
    // })
  // }


}
