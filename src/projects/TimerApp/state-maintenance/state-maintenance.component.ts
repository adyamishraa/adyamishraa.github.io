import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-maintenance',
  templateUrl: './state-maintenance.component.html',
  styleUrls: ['./state-maintenance.component.scss'],
})
export class StateMaintenanceComponent implements OnInit {
  @Input() countDown: number = 1000;
  @Output() ChangeTimerStateEvent = new EventEmitter<any>();
  start: boolean = false;
  interval: any;
  statusChangeLog: any = [];

  constructor() {}

  ngOnInit(): void {}

  onChangeTimerState(command: string) {
    if (command == 'reset') {
      clearInterval(this.interval);
      this.countDown = 1000;
      this.statusChangeLog = [];
      this.start = false;
    } else {
      this.start = !this.start;
      if (this.start) {
        this.statusChangeLog.push({
          started: new Date().toLocaleString(),
        });
        this.interval = setInterval(() => {
          this.countDown--;
          this.ChangeTimerStateEvent.emit({
            countDownValue: this.countDown,
            log: this.statusChangeLog,
            startState: this.start
          });
        }, 1000);
      } else {
        clearInterval(this.interval);
        this.statusChangeLog[this.statusChangeLog.length - 1].paused =
          new Date().toLocaleString();
        this.statusChangeLog[this.statusChangeLog.length - 1].pausedAt =
          this.countDown;
      }
    }

    this.ChangeTimerStateEvent.emit({
      countDownValue: this.countDown,
      log: this.statusChangeLog,
      startState: this.start
    });
  }
}
