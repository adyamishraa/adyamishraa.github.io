import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  countDown: number = 1000;
  timerLog: any = [];
  start: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }


  onChangeTimerState(event: any) {
    this.countDown = event.countDownValue;
    this.timerLog = event.log;
    this.start = event.startState;
  }

}
