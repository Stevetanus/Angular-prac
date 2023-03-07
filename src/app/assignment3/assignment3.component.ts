import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  showDetails = false;
  logCounter:number = 0;
  logs: string[] = [];

  toggleShowDetails () {
    this.showDetails = !this.showDetails;
    this.logs.push(new Date().toString());
    // ++this.logCounter;
    this.logCounter++;
    console.log(this.logs);
    console.log(this.logCounter);
  }
}

