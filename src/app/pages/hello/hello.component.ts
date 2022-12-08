import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  listUser: User[] = [
    {
      name: 'Son',
      age: 23
    }, {
      name: 'Thuong',
      age: 21
    }
  ]
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  showUserInfo(): void {
    // console.log(this.user);
  }

}

export interface User {
  name: string,
  age: number
}
