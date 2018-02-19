import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {}

  cars = [
    'Ford', 'BMW', 'Volvo'
  ];

  myData(): string {
    return 'This is my data, man!';
  }

}
