import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  colorGreenDark:  string = '#2B7570';
  colorGreenBright:  string = '#549490';
  colorGreenMedium:  string = '#7EB2AF';
  colorGreenPastel:  string = '#A7D1CF';
  colorGreenSoft:  string = '#D0F0EF';
  colorWhite:  string = '#FEFEFE';

  paletteGreenList = [this.colorGreenDark,this.colorGreenBright,this.colorGreenMedium,this.colorGreenPastel,this.colorGreenSoft]
}
