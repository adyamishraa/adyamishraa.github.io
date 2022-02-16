import { Component, OnInit } from '@angular/core';
import { CountDownServiceService } from 'src/services/count-down-service.service';

@Component({
  selector: 'app-timer-log-subject',
  templateUrl: './timer-log-subject.component.html',
  styleUrls: ['./timer-log-subject.component.scss']
})
export class TimerLogSubjectComponent implements OnInit {

  timerLog: any =[];

  constructor(private countDownService: CountDownServiceService) { }

  ngOnInit(): void {
    this.countDownService.statusLog.subscribe((value)=>this.timerLog = value)
  }

}
