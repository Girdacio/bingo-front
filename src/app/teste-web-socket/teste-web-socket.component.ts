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
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket');    
    this.stompClient = Stomp.over(socket);
       
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/greetings', (sala: string) => {
        console.log(JSON.parse(sala));
      });
    });

  }

  public send() {
    // const salaConfig: SalaConfig = {
    //   organizador: "girda",
    //   maiorBola: 10
    // };
    // let msg = {name: 'teste websocket!'};
    // this.stompClient.send("/app/hello", {}, JSON.stringify(msg));

    var socket = new WebSocket('ws://localhost:3000');
    socket.onopen = function(event) {
      socket.send('olá');
      socket.onmessage = function(event) {
        console.log(event);
      }
    }    
  }

  private disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

}
