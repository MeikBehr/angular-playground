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

    pokemonID: number = 0;
    pokemonColorMode: string = 'Elektro';

    ngOnInit() {
      this.pokemonColorMode = this.pokemons[this.pokemonID].type;
      this.pokemons[this.pokemonID].isActiv = true;
      this.togglePokemonColor(this.pokemonID);
    }

    selectedPokemon(id: number): void {
      this.pokemonID = id;
      this.togglePokemonColor(id);
      this.pokemons.forEach(el => el.isActiv = false);
      this.pokemons[this.pokemonID].isActiv = true;
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
}
