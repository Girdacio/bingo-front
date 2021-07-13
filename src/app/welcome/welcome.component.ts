import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeForm: FormGroup = new FormGroup({});
  modelos: string = '';
  readonly subject = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
    this.setupForm();
    this.subject.subscribe(x => console.log('recebido: ' + x));    
  }

  setupForm() {
    this.welcomeForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      maiorBola: new FormControl(30),
      codigoBingo: new FormControl('')
    });
  }

  aoSelecionarMarca(event: any) {
    console.log('chegou no pai: ' + event);
    this.modelos = event;
  }
}
