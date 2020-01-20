import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: Question[];
  currentIndex: number;
  correcAnswers: number;
  currentQuestion: Question;
  gameover: boolean;

  constructor(private questionService: QuestionService) {
    this.currentIndex = 0;
    this.gameover = false;
  }

  ngOnInit() {
    this.questionService.fetch().subscribe((questions: Question[]) => {
      this.questions = questions
      this.currentQuestion = this.questions[this.currentIndex];
    })
  }

  onSelect(optionId:number){
    this.currentQuestion.selected = optionId;
  }

  next() {
    this.currentQuestion = this.questions[++this.currentIndex];
  }

  previous() {
    this.currentQuestion = this.questions[--this.currentIndex];
  }

  done() {
    this.gameover = true;
    this.correcAnswers = this.questions.reduce((curecctAnsewrs, question) =>
      question.selected === question.answer ? ++curecctAnsewrs : curecctAnsewrs, 0)
  }
}