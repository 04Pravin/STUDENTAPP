import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit{

  students!:Student[];
  student!:Student;
  searchResults!: Student[];
  searchQuery!: string;
  flag!:boolean;
  searchText!:string;

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

  search(){
    this.searchResults = this.students.filter(student =>
      student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.flag = true;
  }
}
