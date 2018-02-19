import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `

  <h1 [style.color]="titleStyle ? 'green' : 'pink'">Hey</h1>
  <h1 [ngStyle]="titleStyles">Hello</h1>
  
  <p>{{someProperty}}</p>

  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I wil animate</p>

  `,
  styles: [`
  h1 {
    text-decoration:underline;
  }

  .red-title {
    color:red;
  }

  .large-title {
    font-size: 4em;
  }

  p {
    witdh: 200px;
    background: lightgray;
    margin: 100px auto;
    text-align: center;
    padding: 200px;
    font-size: 1.5em;
  }
  `],
  animations: [
    trigger('myAwesomeAnimation', [
      
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%) ', offset: 0 }),
        style({opacity: 1, transform: 'translateY(35%) ', offset: 0.5 }),
        style({opacity: 1, transform: 'translateY(0) ', offset: 1 }),
      ]))),
    ]),
  ]
})
export class AppComponent {

  state:string = 'small';

  constructor(private dataService:DataService) {

  }

  animateMe() {
    this.state = (this.state == 'small' ? 'large' : 'small');
  }

  someProperty:any;

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

  title = 'app';

  titleClasses = {
    'red-title': true,
    'large-title': true
  }

  titleStyle = false;
  titleStyles = {
    'color' : 'red',
    'font-size' : '4em'
  }
}
