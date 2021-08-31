import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  
  constructor(
    private bingoService: BingoService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.setupForm();
    this.setupCookies();
  }

  private setupCookies() {
    if(!this.cookieService.check('participanteId')) {
      const participanteId = Math.random().toString(36).substr(2, 5);
      this.cookieService.set('participanteId', participanteId)
    }
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
      this.irParaBingoPage(bingo.hash);
    });
  }

  entrar() {
    const bingo = this.welcomeForm.get('codigoBingo')?.value;
    this.irParaBingoPage(bingo);
  }

  private irParaBingoPage(bingo: string) {
    this.router.navigate(['bingo'], { queryParams: {id: bingo}});
  }

  private buildData(): CriarBingoData {
    let participanteId = this.cookieService.get('participanteId');
    let nome = this.welcomeForm.get('nome')?.value;
    let maiorBola = this.welcomeForm.get('maiorBola')?.value;
    return { participanteId: participanteId, nome: nome, maiorBola: maiorBola };
  }
}
