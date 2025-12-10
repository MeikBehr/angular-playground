import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.scss'
})
export class FundamentalsComponent {

   // Interpolation
  myText: string = 'Mich kannst Du im fundamentals.component.ts finden!';
  concat: string = ' verknüpft worden!';
  interpolationIsActive: boolean = true;

  // property binding
  inputVal: string = 'Name';
  isDisabled: boolean = false;

  // event binding
  counter: number = 0;
  incr() {
    this.counter++;
  }
  reset() {
    this.counter = 0;
  }

  // two-way-binding
  staticInput: string = 'Bitte Text eingeben!';

}
