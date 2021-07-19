import { Component, OnInit } from '@angular/core';
// import { Client, Message } from '@stomp/stompjs';
// var sockjs = require('node_modules/sockjs-client/dist/sockjs')
// import * from 'sockjs-client';
declare let SockJS: any;
declare let Stomp: any;


@Component({
  selector: 'app-teste-web-socket',
  templateUrl: './teste-web-socket.component.html',
  styleUrls: ['./teste-web-socket.component.scss']
})
export class TesteWebSocketComponent implements OnInit {

  public text: any;
  private stompClient: any;

  constructor() { }

  ngOnInit(): void {
    // sockjs
    // var socket = new SockJs('/gs-guide-websocket');
    // this.rxStomp.brokerURL = "ws://localhost:8080/gs-guide-websocket";
    // this.rxStomp.debug = (str) => {
    //   console.log('STOMP: ' + str);
    // };
    // this.rxStomp.reconnectDelay = 3000;

    // // Attempt to connect
    // this.rxStomp.activate();

    // // this.rxStomp.watch('/topic/greetings').subscribe(message => {
    // //   console.log(message);
    // // });

    // this.rxStomp.publish({ destination: "/app/hello", body: JSON.stringify({ name: "Hello, STOMP" }) });
    this.connect();
  }

  connect() {
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    console.log(socket);
    this.stompClient = Stomp.over(socket);
       
    this.stompClient.connect({}, (frame: any) => {      
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/greetings', (greeting: any) => {
        console.log(JSON.parse(greeting.body).content);
        this.text = JSON.parse(greeting.body).content;
      });
    });   
  }

  public send() {
    this.stompClient.send("/app/hello", {}, JSON.stringify({'name': 'hello websocket!'}));    
  }

  disconnect() {
    // if (stompClient !== null) {
    //   stompClient.disconnect();
    // }
    
    // console.log("Disconnected");
  }

}
