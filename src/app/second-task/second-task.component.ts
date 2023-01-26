import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss'],
})
export class SecondTaskComponent implements OnInit {
  numbers: number[] = [];

  constructor() {
    while (this.numbers.length < 49) {
      this.numbers.push(1);
    }
    console.log(this.numbers);
  }

  ngOnInit(): void {}
}
