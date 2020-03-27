import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'typings';
  targetString = '';
  success = false;

  ngOnInit(): void {
    this.targetString = lorem.sentence();
  }

  onKey(currentInput: String): void {
    this.success = currentInput === this.targetString;
  }
}
