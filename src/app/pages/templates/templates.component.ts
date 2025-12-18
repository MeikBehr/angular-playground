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
}