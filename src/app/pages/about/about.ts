import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  imports: [TimelineModule, CardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  timeline = [
    {
      period: '2026 - atual',
      title: 'Pós-graduação em Desenvolvimento de Sistemas com Java',
      institution: 'Faculdade dos Vales',
      description: 'Aprofundamento em desenvolvimento de sistemas corporativos com Java, arquitetura de software e boas práticas de engenharia.'
    },
    {
      period: 'nov. 2025',
      title: 'Bacharel em Engenharia da Computação',
      institution: 'Universidade Federal de Mato Grosso — UFMT',
      description: 'Formação em fundamentos de computação, sistemas embarcados, redes, algoritmos e desenvolvimento de software.'
    }
  ];

}
