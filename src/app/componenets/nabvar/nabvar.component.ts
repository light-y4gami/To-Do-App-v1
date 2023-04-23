import { Component, ElementRef } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  constructor(public servicio: NotificationService) {}
}

