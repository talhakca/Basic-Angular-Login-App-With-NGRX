import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notificationService: NzNotificationService
  ) { }

  createNotification(title: string, content: string) {
    console.log('hi');
    this.notificationService.blank(title, content, { nzPlacement: 'bottomRight' });
  }

}
