import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // attribute ile seçmek
  // selector: '.app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  isClearButtonDisabled = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onClearButtonClick() {
    this.userName = '';
    this.isClearButtonDisabled = true;
  }

  onUpdateUserNameField(event: Event) {
    this.isClearButtonDisabled = (event.target as HTMLInputElement).value.length === 0;
  }
}

