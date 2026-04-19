import { Component, inject, signal, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { Project } from '../../models/project';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  imports: [ButtonModule, TagModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Injeta o ProjectService
  private service = inject(ProjectService);
  // Cria um signal para armazenar os projetos
  projects = signal<Project[]>([]);

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.projects.set(data);
    });
  }

  openGithub(url: string) {
    window.open(url, '_blank');
  }

}
