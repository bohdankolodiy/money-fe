import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  getMessage: Subject<boolean> = new Subject();
  socket: WebSocket;
  constructor() {
    this.socket = new WebSocket('ws://127.0.0.1:3000/ws');
    this.socket.addEventListener('open', function (event) {
      console.log('WebSocket is open now.', event);
    });
  }

  subscribeToGetMessageEvent() {
    this.socket.addEventListener('message', (event) => {
      if (event.data === 'get_message') {
        this.getMessage.next(true);
      }
    });
  }
}
