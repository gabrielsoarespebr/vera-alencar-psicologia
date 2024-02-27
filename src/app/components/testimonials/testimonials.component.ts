import { Component, Input } from '@angular/core';

interface Patient{
  name: string;
  age: number;
  image: string;
  job: string;
  address: {
    city: string,
    state: string
  };
  testimonial: string
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  @Input() colorBg!: string;
  @Input() colorBgCard!: string;

  patientList: Patient[] = [
    {
      name: "V. S.",
      age: 37,
      job: "Professora",
      image: "patientTeacher.jpg",
      address: {
        city: "Recife",
        state: "PE"
      },
      testimonial: "Vera é um misto de empatia e profissionalismo. Cheguei na minha primeira consulta sem esperanças, e quando a sessão foi concluída, já pude perceber a diferença: eu estava mais confiante sobre o futuro. Agradeço imensamente pelo seu trabalho, sua atenção, sensibilidade, alegria e comprometimento."
    },
    {
      name: "J. C.",
      age: 25,
      job: "Estudante",
      image: "patientStudent.jpg",
      address: {
        city: "Divinópolis",
        state: "MG"
      },
      testimonial: "Falar sobre minha jornada terapêutica nem sempre foi algo que me trouxe conforto. Quando dei início à terapia, não tinha ideia do quão desafiador seria o processo. Enfrentei altos e baixos, mas compreendi que cada fase precisa ser vivenciada, sem pular etapas. Hoje reconheço que a terapia representa um dos maiores investimentos em autocuidado que alguém pode fazer."
    },
    {
      name: "B. S.",
      age: 43,
      job: "Médica",
      image: "patientDoctor.jpg",
      address: {
        city: "Colatina",
        state: "ES"
      },
      testimonial: "Procurei Vera em um período de esgotamento profissional, e ela foi super atenciosa desde o início. Com ela, aprendi a lidar com obstáculos de forma mais leve. Afinal, a felicidade não é ausência de conflitos, mas sim a habilidade de lidar com eles."
    },
    {
      name: "T. C.",
      age: 65,
      job: "Aposentada",
      image: "patientRetired.jpg",
      address: {
        city: "Nova Iguaçu",
        state: "RJ"
      },
      testimonial: "Já fui muito cética em relação à terapia. Mas fiquei muito triste depois do falecimento do meu esposo, e minha filha insistiu que eu conhecesse Vera. Não me arrependo! Essa mulher é uma bênção na minha vida. Finalmente sinto que tenho alguém que me ouve de verdade."
    },
    {
      name: "M. E.",
      age: 27,
      job: "Contadora",
      image: "patientAccountant.jpg",
      address: {
        city: "Patos",
        state: "PB"
      },
      testimonial: "Vera me ajudou a desenvolver ferramentas para lidar com minha ansiedade e a entender melhor meus sentimentos. Sou muito grata pela orientação e apoio que ela tem fornecido ao longo desse processo. Recomendo-a a qualquer um que esteja buscando por autoconhecimento e desenvolvimento pessoal."
    },
    {
      name: "S. R.",
      age: 40,
      job: "Empreendedora",
      image: "patientEntrepreneur.jpg",
      address: {
        city: "Santa Inês",
        state: "MA"
      },
      testimonial: "Ótima profissional! Tem me ajudado a superar problemas com ansiedade e depressão. Cheguei perdida, sem propósito, sem saber lidar com muitas questões, e Vera está me ajudando a me direcionar para o caminho certo, tanto na vida pessoal como na profissional."
    }
  ]

}
