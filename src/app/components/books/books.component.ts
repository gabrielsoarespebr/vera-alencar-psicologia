import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  @Input() colorBg!: string;
  @Input() colorBgBtn!: string;

  bookList = [
    {
      goal: 'Ter sucesso',
      title: 'O jeito Harvard de ser feliz',
      author: 'Shawn Achor',
      image: 'bookSuccess.jpg',
      class: '',
    },
    {
      goal: 'Cultivar bons hábitos',
      title: 'O poder do hábito',
      author: 'Charles Duhigg',
      image: 'bookHabit.jpg',
      class: '',
    },
    {
      goal: 'Criar resiliência',
      title: 'Nada pode me ferir',
      author: 'David Goggins',
      image: 'bookResilience.jpg',
      class: '',
    },
    {
      goal: 'Aumentar o foco',
      title: 'Indistraível',
      author: 'Nir Eyal',
      image: 'bookFocus.jpg',
      class: '',
    },
    {
      goal: 'Melhorar relacionamentos',
      title: 'A cura do ciúme',
      author: 'Robert L. Leahy',
      image: 'bookJealousy.jpg',
      class: '',
    },
  ];

  mouseEnter(index: number) {
    this.bookList.forEach((book, bookIndex) => {
      if (index === bookIndex) book.class = 'highlighted';
      else book.class = 'backgrounded';
    });
  }

  mouseLeave() {
    this.bookList.forEach((book) => (book.class = ''));
  }
}
