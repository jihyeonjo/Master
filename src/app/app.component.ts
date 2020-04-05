import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Study';
  constructor() {
    console.log("call constructor");
    console.log("add Develop Code in TestBranch");
  }
}
