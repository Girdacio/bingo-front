import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from '../models/observable.interface';
import { SubjetService } from '../subjet-service.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit, Observable {  
  form = new FormGroup({});
  message = 'precisa validar***';  
  
  constructor(private service: SubjetService) {
    service.add(this);
  }

  notify(): void {
    this.service.notify(this.getNivel());
  }
  
  getNivel(): number {
    return 1;
  }

  update(): void {
    this.message = 'precisa validar***';
  }

  ngOnInit() {}

  onSubmit() {    
    this.message = 'marca validada!';
    this.notify();
  }
}
