import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalaConfig } from '../models/sala-config.model';
import { Sala } from '../models/sala.model';

declare let SockJS: any;
declare let Stomp: any;


@Component({
  selector: 'app-teste-web-socket',
  templateUrl: './teste-web-socket.component.html',
  styleUrls: ['./teste-web-socket.component.scss']
})
export class TesteWebSocketComponent implements OnInit, OnDestroy {

  public text: any;
  private stompClient: any;

  constructor() { }  

  ngOnInit(): void {
    this.connect();
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private connect() {
    let socket = new SockJS('http://localhost:8080/bingo-websocket');    
    this.stompClient = Stomp.over(socket);
       
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/sala-criada', (sala: string) => {
        console.log(JSON.parse(sala));
      });
    });

  }

  public send() {
    const salaConfig: SalaConfig = {
      organizador: "girda",
      maiorBola: 10
    };
    this.stompClient.send("/app/criar-sala", {}, JSON.stringify(salaConfig));
  }

  private disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

}
