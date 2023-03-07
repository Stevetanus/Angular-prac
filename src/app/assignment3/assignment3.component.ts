import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  showDetails = false;
  logs: string[] = [];

  toggleShowDetails () {
    this.showDetails = !this.showDetails;
    this.logs.push(new Date().toString());
  }
}

