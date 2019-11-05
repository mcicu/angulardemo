import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit {

  roller = ["a", "b", "c"];

  constructor() {
  }

  ngOnInit() {
  }

  alertroll(x : String) {
    alert(x);
  }

}
