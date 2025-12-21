import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {

    // ng-container
ngContainerWithout = `
<div>
  <p>Dieses DIV</p>
  <p>ist gruppierend</p>
  <p>aber auch unnötig!</p>
</div>
`;
ngContainerWith = `
<ng-container>
  <p>Besser, wir nutzen</p>
  <p>hier einen ng-container</p>
  <p>der nachher im DOM "verschwindet"!</p>
</ng-container>
`;

  // ng-template
  user: string = '';

ngTemplateCode = `
<div class="input-container">
  <input id="templateinput" type="text" [(ngModel)]="user" />
  @if (user == '') { <label for="templateinput">Name</label> }
</div>
<ng-container *ngIf="user !== ''; else notValid"></ng-container>
<ng-template #notValid>
  <h4>Bitte Namen eingeben!</h4>
</ng-template>

Der <ng-container> erzeugt kein DOM-Element und dient hier nur als Host für *ngIf mit else. 
Wenn user === '', wird das ng-template mit der Referenz #notValid gerendert.
`;

  // ng-TemplateOutlet

  cards = [
    {
      name: 'ChatGPT',
      model: 'o1 / GPT-4o',
      type: 'LLM',
      cost: '20 $',
      rating: '10/10'
    },
    {
      name: 'Gemini',
      model: '2.0 Flash/Pro',
      type: 'Multimodal LLM',
      cost: '21 €',
      rating: '9/10'
    },
    {
      name: 'Claude',
      model: '3.5 Sonnet',
      type: 'LLM / Coding',
      cost: '20 $',
      rating: '9/10'
    },
    {
      name: 'Llama',
      model: '4.0',
      type: 'Open Source LLM',
      cost: '0 €',
      rating: '9/10'
    }
  ];


ngTemplateOutletImplizit: string = `
<ng-template #aiTable let-ai>
  <table>
    <tbody>
      @for (e of ai; track $index) {
        <tr>
          <th>{{ e.name}}</th>
          <th>{{ e.model}}</th>
          <th>{{ e.type}}</th>
          <th>{{ e.cost}}</th>
          <th>{{ e.rating}}</th>
        </tr>
      }
    </tbody>
  </table>
</ng-template>
<ng-container 
  *ngTemplateOutlet="aiTable; context: {$implicit: cards}">
</ng-container>
`;

ngTemplateOutletContext: string = `
<ng-template #aiTableNamed let-ai="ai">
  <table>
    <tbody>
      @for (e of ai; track $index) {
        <tr>
          <th>{{ e.name}}</th>
          <th>{{ e.model}}</th>
          <th>{{ e.type}}</th>
          <th>{{ e.cost}}</th>
          <th>{{ e.rating}}</th>
        </tr>
      }
    </tbody>
  </table>
</ng-template>
<ng-container  
  *ngTemplateOutlet="aiTableNamed; context: { ai: cards }">
</ng-container>
`;



    // Questions

    questions = [
      { id : 0, 
        topic : 'ng-container', 
        text : 'Was ist der Zweck von ng-container', 
        answer : "ng-container ist ein nicht-rendernder Gruppierungs-Host. Er ermöglicht es, Direktiven (*ngIf, *ngFor, @if, @for) anzuwenden, ohne zusätzliche DOM-Elemente zu erzeugen. Dadurch bleibt das Layout (z. B. Flexbox/Grid) stabil.",
        isActive: false 
      },
      {
        id : 1, 
        topic : 'ng-template', 
        text : 'Was unterscheidet ng-template von normalen HTML-Elementen?', 
        answer : "ng-template definiert Markup, das nicht automatisch gerendert wird. Der Inhalt erscheint nur, wenn das Template explizit instanziiert wird (z. B. über *ngIf, else oder ngTemplateOutlet).", 
        isActive: false 
      },
      {
        id : 2, 
        topic : '@if vs ng-template', 
        text : 'Wann ist @if sinnvoller als ng-template?', 
        answer : "@if ist sinnvoller für einfache, einmalige Bedingungen direkt im Template. ng-template lohnt sich, wenn derselbe Block mehrfach wiederverwendet oder dynamisch an verschiedenen Stellen gerendert werden soll.", 
        isActive: false 
      },
      {
        id : 3, 
        topic : 'ngTemplateOutlet', 
        text : 'Was macht ngTemplateOutlet?', 
        answer : "ngTemplateOutlet ist ein dynamischer Einsetzpunkt, mit dem ein vorhandenes ng-template an einer bestimmten Stelle gerendert wird. So lässt sich HTML wiederverwenden, ohne es zu duplizieren.", 
        isActive: false 
      },
      {
        id : 4, 
        topic : 'ngTemplateOutlet mit $implicit', 
        text : 'Was bedeutet $implicit im Kontext von ngTemplateOutlet?', 
        answer : "$implicit ist der Default-Wert im context. Er kann im Template direkt über let-variable genutzt werden, ohne einen expliziten Property-Namen anzugeben. Das ist praktisch für einfache Templates mit genau einem Eingabewert.", 
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