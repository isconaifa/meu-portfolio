import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonModule, DrawerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
 menuOpen = false;

  links = [
    { label: 'Home', route: '/home' },
    { label: 'Sobre', route: '/sobre' },
    { label: 'Certificações', route: '/certificacoes' },
    { label: 'Projetos', route: '/projetos' },
    { label: 'Skills', route: '/skills' },
    { label: 'Contato', route: '/contato' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
