import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  constructor(private _studentService:StudentServiceService, private _router:Router){}

  addForm = new FormGroup({
    name: new FormControl(''),
    rollNo: new FormControl(''),
    department: new FormControl(''),
    mobileNum: new FormControl(),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(),
    gender: new FormControl(''),
    dob: new FormControl()
  })

  student!:Student;
  
  ngOnInit() {

  }

  add(addForm:any){
    this._studentService.addStudent(addForm.value).subscribe({
      next:(data)=>{
        this.student = data;
        console.log(this.student);
      },
      error:()=>console.log('Error while adding'),
      complete:()=>{
        console.log('Added successfully');
        this._router.navigate(['']);
      }
    })
  }
  cancel(){
    this._router.navigate(['']);
  }
}
