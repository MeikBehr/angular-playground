import { Component } from '@angular/core';
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


}
