import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
})
export class BenefitsComponent {
  @Input() colorBg!: string;
  @Input() colorContent!: string;
}
