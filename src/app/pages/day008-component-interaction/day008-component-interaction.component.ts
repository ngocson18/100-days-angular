import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { authors } from 'src/app/share/author';

@Component({
  selector: 'app-day008-component-interaction',
  templateUrl: './day008-component-interaction.component.html',
  styleUrls: ['./day008-component-interaction.component.scss']
})
export class Day008ComponentInteractionComponent implements OnInit {
  authors = authors;
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(author: Author) {
    console.log(author);
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }

}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
