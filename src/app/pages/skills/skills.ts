import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  categories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML', level: 'avançado' },
        { name: 'CSS', level: 'avançado' },
        { name: 'TypeScript', level: 'avançado' },
        { name: 'Angular', level: 'avançado' },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', level: 'Intermediário' },
        { name: 'Spring Boot', level: 'Intermediário' },
        { name: 'Go', level: 'avançado' },
        { name: 'Gin-Gonic', level: 'avançado' },
        { name: 'Gorilla/Mux', level: 'avançado' },
        { name: 'Go-Chi', level: 'intermediário' },
        { name: 'Fastify', level: 'básico' },
      ]
    },
    {
      name: 'Banco de dados',
      skills: [
        { name: 'MySQL', level: 'Intermediário' },
        { name: 'PostgreSQL', level: 'Intermediário' },
      ]
    },
    {
      name: 'DevOps & Ferramentas',
      skills: [
        { name: 'Git', level: 'Intermediário' },
        { name: 'Docker', level: 'Básico' },
      ]
    }
  ];

  getLevelColor(level: string): string {
    switch (level) {
      case 'Avançado': return 'success';
      case 'Intermediário': return 'info';
      case 'Básico': return 'warn';
      default: return 'info';
    }
  }
}