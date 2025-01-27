import { Component } from '@angular/core';
import { MessagingService } from '../customServices/messaging.service';

@Component({
  selector: 'app-sender',
  standalone: false,
  
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  message: string = '';

  constructor(private messaging: MessagingService) {}

  sendMessage() {
    if (this.message.trim()) {
      this.messaging.sendMessage(this.message);
      this.message = '';
    }
  }
}
