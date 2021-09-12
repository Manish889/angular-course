import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverActive = false;
  serverStatus = "offline";
  serverName = 'Test Server';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.serverActive = true;
    }, 1000)
    // this.serverStatus = Math.random() > 0.5 ? 
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverStatus = 'offline';
    this.serverCreated = true;
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  // }
}
