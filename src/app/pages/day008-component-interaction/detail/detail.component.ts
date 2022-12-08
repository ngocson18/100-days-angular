import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../day008-component-interaction.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }

}
