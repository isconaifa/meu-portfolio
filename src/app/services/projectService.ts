import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Injeta o HttpClient
  private readonly http = inject(HttpClient);
  // URL do arquivo JSON
  private dataUrl = '/data/projects.json';

  // Método que retorna todos os projetos
  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }
  

}
