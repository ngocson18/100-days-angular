import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day005',
  templateUrl: './day005.component.html',
  styleUrls: ['./day005.component.scss']
})
export class Day005Component implements OnInit {

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  incre = 0;
  constructor() { }

  ngOnInit(): void {
    // this.increFunc();
  }

  public increFunc(): void {
    setInterval(() => {
      if (this.incre === 100) {
        this.incre = 0;
      } else {
        this.incre++;
      }
    }, 200);
  }
}
