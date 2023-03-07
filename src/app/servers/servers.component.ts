import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = '';
  clientName = 'Steven';
  serverCreated = false;;
  servers = ['Testserver', 'Testserver 2']

  constructor () {
    setTimeout(()=>{
      this.allowNewServer = true;
    } ,2000)
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was Created! Name is ${this.serverName}`;
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
