import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CriarBingoData } from '../models/criar-bingo-data.model';
import { BingoService } from '../services/bingo.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeForm: FormGroup = new FormGroup({});
  modelos: string = '';
  readonly subject = new Subject<number>();

  constructor(private bingoService: BingoService) { }

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

  criarSala() {
    let data = this.buildData();
    this.bingoService.criarBingo(data).subscribe(bingo => {
      console.log(bingo);
    });
  }

  private buildData(): CriarBingoData {
    let participanteId = Math.random().toString(36).substr(2, 5);
    let nome = this.welcomeForm.get('nome')?.value;
    let maiorBola = this.welcomeForm.get('maiorBola')?.value;
    return { participanteId: participanteId, nome: nome, maiorBola: maiorBola };
  }
}
