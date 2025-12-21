import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {















    // Questions

    questions = [
      { id : 0, 
        topic : 'bla', 
        text : 'Bla vla', 
        answer : "Blubber blubb!",
        isActive: false 
      },
      {
        id : 1, 
        topic : 'bla', 
        text : 'Bla vla', 
        answer : "Blubber blubb!",
        isActive: false 
      },
      {
        id : 2, 
        topic : 'bla', 
        text : 'Bla vla', 
        answer : "Blubber blubb!",
        isActive: false 
      },
    ];

    questionID: number = -1;       // -1 as default for no Pokemon choosen
    questionChoosen: boolean = false;
    showAnswer: boolean = false;

    selectedQuestion(id: number): void {
      this.questions.forEach(el => el.isActive = false);
      this.showAnswer = false;
      if (this.questionID === id) {
        this.questionChoosen = false;
        this.questionID = -1;
      } else {
        this.questionChoosen = true;
        this.questionID = id;
        this.questions[this.questionID].isActive = true;
      }
    }  
}
