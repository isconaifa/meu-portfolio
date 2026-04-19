import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contacts = [
    {
      label: 'LinkedIn',
      description: 'Conecte-se comigo no LinkedIn',
      icon: 'pi pi-linkedin',
      url: 'https://www.linkedin.com/in/isco-naifa/'
    },
    {
      label: 'GitHub',
      description: 'Veja meus repositórios no GitHub',
      icon: 'pi pi-github',
      url: 'https://github.com/isconaifa'
    },
    {
      label: 'E-mail',
      description: 'francisco.naifa@sou.ufmt.br',
      icon: 'pi pi-envelope',
      url: 'mailto:francisco.naifa@sou.ufmt.br'
    }
  ];

  open(url: string) {
    window.open(url, '_blank');
  }
}