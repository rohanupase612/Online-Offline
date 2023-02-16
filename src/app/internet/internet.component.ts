import { Component, OnInit } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent implements OnInit {

  status:any= OnlineStatusType;
  onlineStatusCheck: any = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService) {

  }
  ngOnInit(): void {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Online status Type
      this.status = status;
      console.log(status);

    });
  }

}
