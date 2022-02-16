import { Component, OnInit } from '@angular/core';
import { CountDownServiceService } from 'src/services/count-down-service.service';

@Component({
  selector: 'app-state-maintenance-subject',
  templateUrl: './state-maintenance-subject.component.html',
  styleUrls: ['./state-maintenance-subject.component.scss']
})
export class StateMaintenanceSubjectComponent implements OnInit {

  countDown: number = 1000;
  start: boolean = false;
  statusChangeLog: any;

  constructor(
    private countDownService: CountDownServiceService
  ) {}

  ngOnInit(): void {    
    this.countDownService.countDown.subscribe((value)=> this.countDown = value);
    this.countDownService.startState.subscribe((value)=> this.start = value);
    this.countDownService.statusLog.subscribe((value)=>this.statusChangeLog = value)
  }


  onChangeTimerState(command: string) {
    this.countDownService.onChangeTimerState(command);
  }

}
