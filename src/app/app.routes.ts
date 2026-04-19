import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'sobre', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'certificacoes', loadComponent: () => import('./pages/certifications/certifications').then(m => m.Certifications) },
  { path: 'projetos', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills').then(m => m.Skills) },
  { path: 'contato', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
];
