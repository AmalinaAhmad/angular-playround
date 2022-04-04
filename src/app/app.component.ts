import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('shine', [
      transition('* <=> *', [
        animate("3s", keyframes([
          style({ opacity: 0}), // offset = 0
          style({ opacity: 1}),// offset = 0.33
          style({ opacity: 0}) ,// offset = 0.66
          style({ opacity: 1}) ,// offset = 1
        ]))
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'landing';

  animState = false;

}
