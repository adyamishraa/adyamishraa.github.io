import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-banner',
  templateUrl: './rotating-banner.component.html',
  styleUrls: ['./rotating-banner.component.scss'],
})
export class RotatingBannerComponent implements OnInit {
  imageSource = [
    '../../assets/images/animal2.jfif',
    '../../assets/images/animal1.jfif',
    '../../assets/images/animal3.jfif',

    // 'http://fakeimg.pl/2000x800/0079D8/fff/?text=Without',
    // 'http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript',
    // 'http://fakeimg.pl/2000x800/F90/fff/?text=Carousel',
  ];

  imgSelected: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onClickControl(control: string): void {
    if (control == 'next') {
      if (this.imgSelected < 2) {
        this.imgSelected++;
      }
    } else {
      if (this.imgSelected > 0) {
        this.imgSelected--;
      }
    }
  }
}
