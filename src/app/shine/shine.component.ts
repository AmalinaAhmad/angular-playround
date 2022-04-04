import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shine',
  templateUrl: './shine.component.html',
  styleUrls: ['./shine.component.css'],
  animations: [
    trigger('shine', [
      // ...
      state('shinestart', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})

export class ShineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
