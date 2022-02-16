import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountDownServiceService {

  countDown = new BehaviorSubject<number>(1000);
  count: number = 1000;
  timerLog: any = [];
  statusLog = new BehaviorSubject<[]>(this.timerLog);
  startState = new BehaviorSubject<boolean>(false);
  interval: any;


  constructor() { }

  onChangeTimerState(command: string) {
    if (command == 'reset') {
      clearInterval(this.interval);
      this.count = 1000;
      this.countDown.next(this.count);
      this.timerLog = [];
      this.startState.next(false);
      this.statusLog.next([]);
    } else {
      this.startState.next(!this.startState.getValue());
      if (this.startState.getValue()) {
        this.timerLog.push({
          started: new Date().toLocaleString(),
        });
        this.interval = setInterval(() => {      
          this.count--;
          this.countDown.next(this.count);
        }, 1000);
      } else {
        clearInterval(this.interval);
        this.timerLog[this.timerLog.length - 1].paused = new Date().toLocaleString();
        this.timerLog[this.timerLog.length - 1].pausedAt = this.countDown.getValue();
      }
      this.statusLog.next(this.timerLog);

    }
  }

}
