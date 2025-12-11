import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

// 1. CONSTANTE DEFINITION außerhalb der Klasse
const fruits = {
  banane: { name: 'Banane', cost: '2', isActive: false } as const, // 'as const' auch für innere Objekte sichern
  orange: { name: 'Orange', cost: '3', isActive: false } as const,
  apple:  { name: 'Apfel',  cost: '4', isActive: false } as const,
} as const;

// 2. TYPDEFINITIONEN für Schlüssel und mutable Version - Nimm die Schlüssel aus fruits als erlaubte Werte.
type FruitKey = keyof typeof fruits;

type MutableFruits = {
  -readonly [K in keyof typeof fruits]: {
    name: string;
    cost: string;
    isActive: boolean; // Muss mutable sein, um es ändern zu können
  };
};

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [FormsModule, NgClass],
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

  // assignments
  salesPerson: string = 'Verkäufername';
  prodName: string = '';
  pieces:number = 6;
  priceSingle:number = 0;
  sumWithout: number = 0;
  sumTotal:number = 0;
  discount:number = 10;
  isDiscount: boolean = false;
  startFruit: FruitKey = 'banane';  // Muss Element von FruitKey sein, sonst any-Fehler!

  // 3. KLASSEN-EIGENSCHAFT: Hier arbeiten wir mit der veränderbaren Kopie
  // Wir verwenden structuredClone, um eine tiefe Kopie zu erzeugen
  // Mach mir eine Kopie, bei der ich die Felder ändern darf.
  fruits: MutableFruits = structuredClone(fruits) as MutableFruits;

  constructor() {
    this.initialActivateFruit();
  }

  // 4. FIX: Zuweisung des spezifischen Schlüssels 'banane' und Nutzung von 'this.fruits'
  initialActivateFruit(): void {
    this.fruits[this.startFruit].isActive = true;
    this.prodName = this.fruits[this.startFruit].name;
    this.priceSingle = +this.fruits[this.startFruit].cost;
    this.actualiseFields();
  }

  // 5. FIX: Vereinfachung des Castings und Nutzung von 'this.fruits'
  decativateButtons(): void {
    // Casting des String-Arrays zu unserem speziellen Schlüssel-Typ FruitKey
    (Object.keys(this.fruits) as FruitKey[]).forEach(key => {
        this.fruits[key].isActive = false; 
    });
  }

  // 6. FIX: Zugriff auf 'this.fruits' (die veränderbare Instanz)
  activateButton(fruit: FruitKey): void {
    this.decativateButtons();
    // Greife auf die Klassen-Eigenschaft zu, nicht auf die globale Konstante
    this.fruits[fruit].isActive = true; 
    this.prodName = this.fruits[fruit].name;
    this.priceSingle = +this.fruits[fruit].cost;
    this.actualiseFields();
  }

  toggleDiscount() {
    this.isDiscount = !this.isDiscount;
    this.actualiseFields();
  }

  actualiseFields() {
    this.sumWithout = this.pieces * this.priceSingle;
    this.sumTotal = this.sumWithout;
    this.discount = 0;
    if (this.isDiscount) {
      this.discount = 10;
      this.sumTotal = this.sumWithout * (100 - this.discount)/100;
    };
  }

}