import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
})
export class DividerComponent implements OnInit {
  colorBg: string = '';
  colorWaveFirst: string = '';
  colorWaveSecond: string = '';
  colorWaveThird: string = '';
  colorWaveFourth: string = '';

  @Input() palette!: string[];
  @Input() reverse!: boolean;

  ngOnInit() {
    if (this.reverse) this.palette.reverse();
    this.colorBg = this.palette[0];
    this.colorWaveFirst = this.palette[1];
    this.colorWaveSecond = this.palette[2];
    this.colorWaveThird = this.palette[3];
    this.colorWaveFourth = this.palette[4];
  }
}
