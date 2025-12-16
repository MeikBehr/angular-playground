export const CODE_EXAMPLES = {
    
codeExampleNgIf : `
<div class="btn-green" *ngIf="displayNgIf; else hiddenContent"></div>`,

codeExampleAtIf : `
@if (displayAtIf) {
  <div class="btn-green"></div>    
  } @else {
    <div>Content is hidden</div> 
}`,

codeExampleNgFor : `
<tbody>
  <tr *ngFor="let entry of ngForObject">
    <td>{{ entry.id }}</td>
    <td>{{ entry.name }}</td>
    <td>{{ entry.developer }}</td>
  </tr>
</tbody>`,

codeExampleStringNgFor : `
<span *ngFor="let char of ('Angular'.split(''))">
  {{ char }} -
</span>`,

codeExampleAtFor : `
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
</tbody>`,

codeExampleStringAtFor : `
<span *ngFor="let char of ('Angular'.split(''))">
  {{ char }} -
</span> `, 


codeExampleStringNgSwitch : `
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
`,


codeExampleStringAtSwitch : `
<div class="assignment">
  <label for="kiChoise">Wähle ein LLM zur Auswertung:</label>
  <select id="kiChoise" [(ngModel)]="choosenOptionAt">
    <option value="" disabled>Bitte wählen Sie eine Option aus</option>
    <option *ngFor="let ki of kiOption" [ngValue]="ki">{{ ki }}</option>
  </select>
  <div>
  <h4>Ergebnis der Auswertung</h4>
  @switch (choosenOptionAt) {
    @case ('ChatGPT') {<p>GPT ist der Marktführer für die Code-Generierung.</p>}
    @case ('Gemini') {<p>Gemini ist stark in der logischen Analyse und TS-Code.</p>}
    @case ('Claude') {<p>Claude kann große Dateikontexte verarbeiten.</p>}
    @case ('Llama') {<p>Llama ist lahm. ^^</p>}
    @default {<p>Bitte wählen Sie ein Modell aus.</p>}
  }
</div>
`,

};
