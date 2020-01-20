import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() currentQuestion: Question;
  @Output() selected: EventEmitter<number>;

  constructor(){
    this.selected =  new EventEmitter<number>();
  }

  select(optionid: string) {
    this.selected.emit(parseInt(optionid));

  }
 
 }