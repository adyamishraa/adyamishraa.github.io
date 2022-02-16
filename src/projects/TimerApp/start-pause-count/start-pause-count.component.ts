import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-count',
  templateUrl: './start-pause-count.component.html',
  styleUrls: ['./start-pause-count.component.scss']
})
export class StartPauseCountComponent implements OnInit {

  @Input() timerLog: any = [];
  @Input() start: boolean = false;

  constructor() { }

  ngOnInit(): void {    
  }

}
