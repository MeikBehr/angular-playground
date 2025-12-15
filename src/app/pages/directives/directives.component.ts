import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

    // ngif
    displayNgIf: boolean = true;
    toggleDisplayNgif() {
      this.displayNgIf = !this.displayNgIf;
    }

    // ngFor
    ngForObject = [
      {id: 1, name : 'GPT', 'developer':'OpenAI'},
      {id: 2, name : 'Gemini', 'developer':'Google'},
      {id: 3, name : 'Claude', 'developer':'Anthropic'},
      {id: 4, name : 'Perplexity', 'developer':'Perplexity AI'},
      {id: 5, name : 'Llama', 'developer':'Meta'},
    ]

    codeExampleNgFor = `
    <tbody>
      <tr *ngFor="let entry of ngForObject">
        <td>{{ entry.id }}</td>
        <td>{{ entry.name }}</td>
        <td>{{ entry.developer }}</td>
      </tr>
    </tbody>
    `;

    codeExampleStringNgFor = `
    <span *ngFor="let char of ('Angular'.split(''))">
      {{ char }} -
    </span>
    `;

    // @For
    codeExampleAtFor = `
    <tbody>
      @for (entry of ngForObject; track $index) {
        <tr>
          <td>{{ entry.id}}</td>
          <td>{{ entry.name}}</td>
          <td>{{ entry.developer}}</td>
        </tr>
      } @empty {
      <h2>Keine Daten vorhanden!</h2>
      }
    </tbody>
    `;

        codeExampleStringAtFor = `
    <span *ngFor="let char of ('Angular'.split(''))">
      {{ char }} -
    </span>
    `;  


    // *ngSwitch
    kiOption = ['ChatGPT', 'Gemini', 'Claude', 'Llama'];
    choosenOption = '';


        codeExampleStringNgSwitch = `
<div class="flex-row">
  <div>
    <label id="kiChoise">Wähle ein LLM zur Auswertung:</label>
    <select id="kiChoise" [(ngModel)]="choosenOption">
      <option value="" disabled>Bitte wählen Sie eine Option aus</option>
      <option *ngFor="let ki of kiOption" [ngValue]="ki">{{ ki }}</option>
    </select>
    <div [ngSwitch]="choosenOption">
      <h4>Ergebnis der Auswertung</h4>
      <p *ngSwitchDefault>Bitte wählen Sie ein Modell aus.</p>
      <p *ngSwitchCase="'ChatGPT'">GPT ist der Marktführer für die Code-Generierung.</p>
      <p *ngSwitchCase="'Gemini'">Gemini ist stark in der logischen Analyse und TS-Code.</p>
      <p *ngSwitchCase="'Claude'">Claude kann große Dateikontexte verarbeiten.</p>
      <p *ngSwitchCase="'Llama'">Llama ist lahm. ^^</p>
    </div>
  </div>
</div>    
    `; 



}
