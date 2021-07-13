import { Injectable } from '@angular/core';
import { Observable } from './models/observable.interface';
import { Subject } from './models/subject.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjetService implements Subject {

  observers: Observable[] = [];
  constructor() { }

  add(component: Observable): void {
    this.observers.push(component);
  }
  remove(component: Observable): void {
    const index = this.observers.indexOf(component);
    if (index >= 0) {
      this.observers.slice(index, 1);
    }    
  }

  notify(nivel: number): void {
    this.observers.forEach(component => {
      if (component.getNivel() > nivel) component.update();
    });
  }
}
