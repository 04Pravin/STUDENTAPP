import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit{

  student!:Student;
  id!:number;
  constructor(private _router:Router, private _studentService:StudentServiceService, private _activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this._activatedRoute.params.subscribe({
      next:(data)=> this.id = data['id']
    });

      this._studentService.getById(this.id).subscribe({
        next:(data)=>{
          this.student = data;
          console.log(this.student);
        },
        error:()=>console.log('Error while get by id'),
        complete:()=>console.log('Completed')
      })
  }

  delete(id:number){
    this._studentService.delete(id).subscribe(
      {
        complete:()=>{
          console.log('delted');
          this._router.navigate(['']);
        }
      }
    );
  }
}
