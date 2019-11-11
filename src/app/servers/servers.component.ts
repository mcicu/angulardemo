import { Component, OnInit } from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers: Server[] = [
    new Server(12, 'online'),
    new Server(13, 'offline')
  ];

  ngOnInit() {
  }

}
