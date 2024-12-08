import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
      
  }
  home(){
    this.router.navigate(['/home']);
  }

}
