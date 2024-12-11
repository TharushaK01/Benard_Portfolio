import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent implements OnInit{
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: '',
    },
    selectable: true, // Allow date selection
    select: this.handleDateClick.bind(this), // Use `select` instead of `dateClick`
  };

  selectedDate: string = new Date().toISOString().split('T')[0]; // Default to today
  timeSlots: string[] = [];


  
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.generateTimeSlots();
  }
  home(){
    this.router.navigate(['/home']);
  }
  handleDateClick(arg: any): void {
    this.selectedDate = arg.dateStr;
  }

  generateTimeSlots(): void {
    const startTime = new Date();
    startTime.setHours(16, 0, 0); // 4:00 PM
    const endTime = new Date();
    endTime.setHours(18, 0, 0); // 6:00 PM

    const interval = 5; // Minutes
    const slots: string[] = [];

    while (startTime < endTime) {
      const time = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push(time);
      startTime.setMinutes(startTime.getMinutes() + interval);
    }

    this.timeSlots = slots;
  }

}
