import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.css']
})
export class Homework3Component implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
