import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CODE_EXAMPLES } from './directives.code-examples';

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
    codeExampleNgIf = CODE_EXAMPLES.codeExampleNgIf;

    // @if
    displayAtIf: boolean = true;
    toggleDisplayAtif() {
      this.displayAtIf = !this.displayAtIf;
    }
    codeExampleAtIf = CODE_EXAMPLES.codeExampleAtIf;

    // ngFor
    ngForObject = [
      {id: 1, name : 'GPT', 'developer':'OpenAI'},
      {id: 2, name : 'Gemini', 'developer':'Google'},
      {id: 3, name : 'Claude', 'developer':'Anthropic'},
      {id: 4, name : 'Perplexity', 'developer':'Perplexity AI'},
      {id: 5, name : 'Llama', 'developer':'Meta'},
    ];

    codeExampleNgFor = CODE_EXAMPLES.codeExampleNgFor;
    codeExampleStringNgFor = CODE_EXAMPLES.codeExampleStringNgFor;

    // @For
    codeExampleAtFor = CODE_EXAMPLES.codeExampleAtFor;
    codeExampleStringAtFor = CODE_EXAMPLES.codeExampleStringAtFor;  


    // *ngSwitch
    kiOption = ['ChatGPT', 'Gemini', 'Claude', 'Llama'];
    choosenOption = '';
    codeExampleStringNgSwitch = CODE_EXAMPLES.codeExampleStringNgSwitch; 

    // @Switch
    choosenOptionAt = '';
    codeExampleStringAtSwitch = CODE_EXAMPLES.codeExampleStringAtSwitch;

    // ngClass
    colorMode = 'lightMode';
    toggleMode(): void {
        this.colorMode = (this.colorMode === 'lightMode') ? 'darkMode' : 'lightMode';
    }
    codeExampleNgClass = CODE_EXAMPLES.codeExampleNgClass;

    // ngStyle
    fontSize: number = 16;
    codeExampleNgStyle = CODE_EXAMPLES.codeExampleNgStyle;

    change(delta: number) {
      if (delta == 16) {
        this.fontSize = delta;
        return;
      }
      const newSize = this.fontSize + delta;
      if (newSize >= 4 && newSize <= 28) {
        this.fontSize = newSize;
      }
    }

    // Assignement

    pokemons = [
      {id : 0, name : 'Pikachu', type : 'Elektro', power : 5, isActiv: false },
      {id : 1, name : 'Bisasam', type : 'Gras', power : 4, isActiv: false },
      {id : 2, name : 'Glumanda', type : 'Feuer', power : 3, isActiv: false },
      {id : 3, name : 'Schiggy', type : 'Wasser', power : 4, isActiv: false },
      {id : 4, name : 'Digda', type : 'Erde', power : 2, isActiv: false },
    ];

    pokemonID: number = -1;       // -1 as default for no Pokemon choosen
    pokemonColorMode: string = '';
    pokemonChoosen: boolean = false;

    selectedPokemon(id: number): void {
      this.pokemons.forEach(el => el.isActiv = false);
      if (this.pokemonID === id) {
        this.pokemonChoosen = false;
        this.pokemonID = -1;
      } else {
        this.pokemonChoosen = true;
        this.pokemonID = id;
        this.togglePokemonColor(id);
        this.pokemons[this.pokemonID].isActiv = true;
      }
    }

    togglePokemonColor(id: number): void {
      switch(this.pokemons[id].type) {
        case 'Elektro' : { this.pokemonColorMode = 'electro'; break;}
        case 'Gras' : { this.pokemonColorMode = 'gras'; break;}
        case 'Feuer' : { this.pokemonColorMode = 'fire'; break;}
        case 'Wasser' : { this.pokemonColorMode = 'water'; break;}
        case 'Erde' : { this.pokemonColorMode = 'earth'; break;}
      }
    }

    // Questions

    questions = [
      { id : 0, 
        topic : '@if vs ngIf', 
        text : 'Was ist der grundlegende Unterschied zwischen *ngIf und @if, und warum wurde @if eingeführt?', 
        answer : "*ngIf ist eine klassische Angular-Direktive, die zur Laufzeit ausgewertet wird und intern mit @Directive umgesetzt ist. @if ist Teil der neuen Control-Flow-Syntax ab Angular 17 und wird direkt vom Template-Compiler verarbeitet. Dadurch ist @if performanter, besser lesbar und kein Direktiven-Wrapper mehr.",
        isActiv: false 
      },
      {
        id : 1, 
        topic : '@for vs ngFor', 
        text : 'Warum ist track bei @for verpflichtend und was bringt das für Angular?', 
        answer : "*ngFor ist eine Direktive, während @for Teil der neuen Template-Syntax ist. Bei @for ist track verpflichtend, damit Angular DOM-Elemente effizient wiederverwenden kann. Das verbessert Performance und macht den Code klarer.", 
        isActiv: false 
      },
      {
        id : 2, 
        topic : 'ngClass vs ngStyle', 
        text : 'Wann würdest du ngClass bevorzugen und wann ngStyle?', 
        answer : "ngClass wird verwendet, um ganze CSS-Klassen dynamisch zu setzen oder zu entfernen. ngStyle ist sinnvoll, wenn einzelne Styles direkt geändert werden sollen, z. B. Farben oder Größen. Für komplexeres Styling ist ngClass meist die bessere Wahl.", 
        isActiv: false 
      },
      {
        id : 3, 
        topic : 'Logik TS vs Template', 
        text : 'Warum sollte komplexe Logik eher im TypeScript als im Template stehen?', 
        answer : "Komplexe Logik sollte im TypeScript stehen, damit Templates übersichtlich und lesbar bleiben. Templates sind für Darstellung gedacht, nicht für Geschäftslogik. Das erleichtert Wartung, Tests und Fehlersuche.", 
        isActiv: false 
      },
      {
        id : 4, 
        topic : '@switch Einsatz', 
        text : 'Wann ist @switch sinnvoller als mehrere @if-Blöcke?', 
        answer : "@switch ist sinnvoll, wenn mehrere feste Fälle sauber unterschieden werden sollen. Es ist übersichtlicher als viele @if-Blöcke hintereinander. Wie @if ist @switch Teil der neuen Template-Syntax und keine Direktive.", 
        isActiv: false 
      },
    ];

    questionID: number = -1;       // -1 as default for no Pokemon choosen
    questionChoosen: boolean = false;
    showAnswer: boolean = false;

    selectedQuestion(id: number): void {
      this.questions.forEach(el => el.isActiv = false);
      this.showAnswer = false;
      if (this.questionID === id) {
        this.questionChoosen = false;
        this.questionID = -1;
      } else {
        this.questionChoosen = true;
        this.questionID = id;
        this.questions[this.questionID].isActiv = true;
      }
    }

}
