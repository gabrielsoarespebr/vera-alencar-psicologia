import { Component, HostListener, Input } from '@angular/core';

interface socialMedia {
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() colorBg!: string;
  endOfPage: boolean = false;

  socialMediaList: socialMedia[] = [
    {
      title: 'Instagram',
      imgUrl: '/assets/images/iconInstagram.png',
    },
    {
      title: 'YouTube',
      imgUrl: '/assets/images/iconYoutube.png',
    },
    {
      title: 'LinkedIn',
      imgUrl: '/assets/images/iconLinkedin.png',
    },
    {
      title: 'WhatsApp',
      imgUrl: '/assets/images/iconWhatsapp.png',
    },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      this.endOfPage = true;
    } else {
      this.endOfPage = false;
    }
  }
}
