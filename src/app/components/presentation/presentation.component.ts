import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  @Input() colorBg!: string;
  @Input() colorBgBtn!: string;

}
