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
  isWrong: Array<Boolean>;
  isCorrect: Array<Boolean>;
  isDone: Array<Boolean>;

  ngOnInit(): void {
    this.targetString = lorem.sentence();
    this.isWrong = [];
    this.isCorrect = [];
    this.isDone = [];
    for (let i = 0; i < this.targetString.length; ++i) {
      this.isWrong.push(false);
      this.isDone.push(false);
      this.isCorrect.push(false);
    }
  }

  onKey(currentInput: String): void {
    this.success = currentInput === this.targetString;

    // Go char by char and figure it out.
    // Current one
    let index = currentInput.length - 1;
    if (index >= 0) {
      this.isDone[index] = true;
      this.isCorrect[index] = this.targetString[index] === currentInput[index];
      this.isWrong[index] = this.targetString[index] !== currentInput[index];
    }
  }
}
