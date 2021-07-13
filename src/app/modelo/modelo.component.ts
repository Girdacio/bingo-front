import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from '../models/observable.interface';
import { SubjetService } from '../subjet-service.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnInit, Observable {
  form = new FormGroup({});
  message = 'precisa valida ***';

  constructor(private service: SubjetService) {
    service.add(this);
  }
  
  update(): void {
    this.message = 'precisa validar***';
  }

  getNivel(): number {
    return 2;
  }
  notify(): void {
    this.service.notify(this.getNivel());
  }

  ngOnInit() {}

  onSubmit() {    
    this.message = 'modelo validado!';
    this.notify();
  }
}
