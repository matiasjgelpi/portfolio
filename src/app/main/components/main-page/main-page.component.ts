import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/utils/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    fadeInOut('3s'),
  ]
})
export class MainPageComponent implements OnInit {



  constructor() {
 
   }

  ngOnInit(): void {

  }

}
