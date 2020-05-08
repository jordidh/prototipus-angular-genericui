import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messageType;
  messageText;

  constructor() { }

  getType() {
    return this.messageType;
  }

  getText() {
    return this.messageText;
  }

  setMessage(messageType, messageText) {
    this.messageType = messageType;
    this.messageText = messageText;
  }

}