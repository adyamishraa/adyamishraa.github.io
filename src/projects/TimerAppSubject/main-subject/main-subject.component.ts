import { Component, OnInit } from '@angular/core';
import { CountDownServiceService } from 'src/services/count-down-service.service';

@Component({
  selector: 'app-main-subject',
  templateUrl: './main-subject.component.html',
  styleUrls: ['./main-subject.component.scss']
})
export class MainSubjectComponent implements OnInit {

  countDown: number = 1000;
  constructor(
    private countDownService: CountDownServiceService
  ) { }

  ngOnInit(): void {
    this.countDownService.countDown.subscribe((value)=> this.countDown = value);
  }

}
