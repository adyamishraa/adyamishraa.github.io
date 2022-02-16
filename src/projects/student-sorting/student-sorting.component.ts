import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-sorting',
  templateUrl: './student-sorting.component.html',
  styleUrls: ['./student-sorting.component.scss'],
})
export class StudentSortingComponent implements OnInit {

  studentData: any = [
    { name: 'Disha', class: 7, section: 'B', sub1: 32, sub2: 86 },
    { name: 'Gauri', class: 4, section: 'B', sub1: 43, sub2: 24 },
    { name: 'Adya', class: 10, section: 'C', sub1: 79, sub2: 83 },
    { name: 'Bhanu', class: 9, section: 'A', sub1: 79, sub2: 83 },
    { name: 'Chitra', class: 8, section: 'C', sub1: 54, sub2: 24 },
    { name: 'Elison', class: 6, section: 'D', sub1: 23, sub2: 35 },
    { name: 'Faiz', class: 5, section: 'A', sub1: 88, sub2: 99 },
    { name: 'Hritik', class: 3, section: 'D', sub1: 68, sub2: 97 }
  ];

  tableHeads: any = [];
  sortState: boolean = false;

  constructor() {}

  ngOnInit(): void {
    for (let key in this.studentData[0]) {
      this.tableHeads.push(key);
    }
  }

  onClickHead(key: any) {
    this.sortState = !this.sortState;
    if(this.sortState){
      this.studentData.sort(function(a: any, b: any) {
        let keyA = a[key];
        let  keyB = b[key];
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else {
      this.studentData.sort(function(a: any, b: any) {

        let keyA = a[key];
        let  keyB = b[key];
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    }
     
  }


}
