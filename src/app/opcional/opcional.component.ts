import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from '../models/observable.interface';
import { SubjetService } from '../subjet-service.service';

@Component({
  selector: 'app-opcional',
  templateUrl: './opcional.component.html',
  styleUrls: ['./opcional.component.scss']
})
export class OpcionalComponent implements OnInit, OnDestroy, Observable {
  form = new FormGroup({});
  message = 'precisa validar***';
  
  constructor(private service: SubjetService) {
    service.add(this);
  }
  ngOnDestroy(): void {
    this.service.remove(this);
  }

  notify(): void {
    this.service.notify(this.getNivel());
  }
  
  getNivel(): number {
    return 4;
  }

  update(): void {
    this.message = 'precisa validar***';
  }
  ngOnInit() {}

  onSubmit() {    
    this.message = 'opcional validado!';
    this.notify();
  }
}