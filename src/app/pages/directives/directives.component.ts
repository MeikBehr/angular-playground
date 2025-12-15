import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [ CommonModule ],
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
    

}
