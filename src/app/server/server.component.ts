import {Component, Input} from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  @Input('srvElement') server: Server;

}
