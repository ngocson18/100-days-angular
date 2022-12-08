import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-day010-viewchild-viewchildren',
  templateUrl: './day010-viewchild-viewchildren.component.html',
  styleUrls: ['./day010-viewchild-viewchildren.component.scss']
})
export class Day010ViewchildViewchildrenComponent implements OnInit {

  @ViewChild('childrenComp') childrenComp!: ChildrenComponent;
  toggleInside() {
    console.log(this.childrenComp);

    this.childrenComp.toggle();
  }
  constructor() { }

  ngOnInit(): void {
  }
}
