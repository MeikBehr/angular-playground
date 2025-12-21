import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})

export class LifecycleComponent implements OnInit {

  count: number = 0;
  private intervalId!: number;

  // ngOnInit Hook, this code runs when the component is initialized
  ngOnInit(): void {
    this.startCounter();
  }

  startCounter() {
    this.intervalId = window.setInterval(() => {
      if (this.count <= 5) {
        console.log('ngOnInit:' + this.count++);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Interval cleared – component destroyed');
  }


  // ngOnInit
ngOnInitTemplate: string = `
import { OnInit } from '@angular/core';

export class LifecycleComponent implements OnInit {
  count: number = 0;
  private intervalId!: number;

  // ngOnInit Hook, this code runs when the component is initialized
  ngOnInit(): void {
    this.startCounter();
  }

  startCounter() {
    this.intervalId = window.setInterval(() => {
      if (this.count <= 5) {
        console.log('ngOnInit:' + this.count++);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Interval cleared – component destroyed');
  }  
`;


  // ngOnDestroy
onOnDestroyTemplate: string = `
import { OnInit, OnDestroy } from '@angular/core';

export class LifecycleComponent implements OnInit, OnDestroy {
  intervalId!: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      console.log('running...');
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Interval cleared – component destroyed');
  }
}
`;





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
