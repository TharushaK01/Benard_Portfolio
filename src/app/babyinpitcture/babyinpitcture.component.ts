import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-babyinpitcture',
  templateUrl: './babyinpitcture.component.html',
  styleUrl: './babyinpitcture.component.css'
})
export class BabyinpitctureComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
      
  }
  calender(){
    this.router.navigate(['/calender']);
  }
}
