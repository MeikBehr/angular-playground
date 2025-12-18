import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {

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


}