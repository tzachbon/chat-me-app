import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IWebSocketData } from '../../models/websocket.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(environment.WEBSOCKET_URL);
  }

  listen(eventName: string) {
    return new Observable<IWebSocketData<any>>(subscriber => {
      this.socket.on(eventName, data => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: IWebSocketData<any>) {
    this.socket.emit(eventName, data);
  }
}
