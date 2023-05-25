import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit{

  @Input() students!:Student[];

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
    this._router.navigate(['/detail',student.id]);
  }
}
