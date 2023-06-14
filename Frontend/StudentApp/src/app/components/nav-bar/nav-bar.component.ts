import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private _router:Router){}

  ngOnInit(){
    
  }

  home(){
    this._router.navigate(['']);
  }
  add(){
    this._router.navigate(['add']);
  }
  table(){
    this._router.navigate(['table']);
  }
}
