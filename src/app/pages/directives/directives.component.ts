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
    display: boolean = true;
    toggleDisplay() {
      this.display = !this.display;
    }

}
