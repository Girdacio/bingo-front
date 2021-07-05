import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.welcomeForm = new FormGroup({
      nome: new FormControl('Nin', Validators.required)
    });
  }

}
