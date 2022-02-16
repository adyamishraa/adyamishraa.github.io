import { Component, OnInit } from '@angular/core';
import { CountDownServiceService } from 'src/services/count-down-service.service';

@Component({
  selector: 'app-start-pause-count-subject',
  templateUrl: './start-pause-count-subject.component.html',
  styleUrls: ['./start-pause-count-subject.component.scss']
})
export class StartPauseCountSubjectComponent implements OnInit {

  timerLog: any = [];
  start: boolean = false;

  constructor(
    private coundDownService: CountDownServiceService
  ) { }

  ngOnInit(): void {
    this.coundDownService.startState.subscribe((value)=> this.start = value);
    this.coundDownService.statusLog.subscribe((value)=>this.timerLog = value)
  }

}
