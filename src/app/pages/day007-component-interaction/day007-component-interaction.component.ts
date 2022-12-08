import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day007-component-interaction',
  templateUrl: './day007-component-interaction.component.html',
  styleUrls: ['./day007-component-interaction.component.scss']
})
export class Day007ComponentInteractionComponent implements OnInit {

  @Input() backgroundColor: string | undefined;
  @Input() progressColor: string | undefined;
  @Input() progress2 = 0;
  public $progress = 0;
  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    if (typeof value !== 'number') {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
