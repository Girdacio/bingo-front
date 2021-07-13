import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from '../models/observable.interface';
import { SubjetService } from '../subjet-service.service';

@Component({
  selector: 'app-ano',
  templateUrl: './ano.component.html',
  styleUrls: ['./ano.component.scss']
})
export class AnoComponent implements OnInit, Observable {
  form = new FormGroup({});
  message = 'precisa validar***';
  
  constructor(private service: SubjetService) {
    service.add(this);
  }

  ngOnInit() {}

  notify(): void {
    this.service.notify(this.getNivel());
  }
  
  getNivel(): number {
    return 3;
  }

  update(): void {
    this.message = 'precisa validar***';
  }
  onSubmit() {    
    this.message = 'ano validado!';
    this.notify();
  }
}