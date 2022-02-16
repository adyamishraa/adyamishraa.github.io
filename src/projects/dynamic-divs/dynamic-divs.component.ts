import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {

  arr: any = [1,1,1]
  scrollArr: any = new BehaviorSubject<any>(this.arr);
  constructor() { }

  ngOnInit(): void {
    window.onscroll=(e)=>{
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight){        
        if(this.arr.length<=20) {
          this.arr.push(1); 
          this.scrollArr.next(this.arr);
          console.log("Items showing:", this.arr.length-1)
        } else {
          alert('No more items to display')
        }
        
      }
     }
  }


   

}
