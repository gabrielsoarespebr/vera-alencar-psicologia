import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css',
})
export class FlipCardComponent {
  @Input() serviceTitle!: string;
  @Input() serviceIcon!: string;
  @Input() serviceImage!: string;
  @Input() colorTxt!: string;
  @Input() colorBgCard!: string;

}
