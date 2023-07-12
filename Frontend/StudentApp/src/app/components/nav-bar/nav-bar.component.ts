import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private _router:Router, private _location:Location){}

  flag!:boolean;

  ngOnInit(){
    this.flag=false;
    console.log('Nav-bar :'+this.flag);
  }

  home(){
    this._router.navigate(['']);
    // this.flag=true;
  }
  add(){
    this._router.navigate(['add']);
  }
  table(){
    this._router.navigate(['table']);
  }
  back(){
    this._location.back();
  }
}
