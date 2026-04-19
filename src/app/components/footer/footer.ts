import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  imports: [ButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  year = new Date().getFullYear();

  links = [
    {
      label: 'LinkedIn',
      icon: 'pi pi-linkedin',
      url: 'https://www.linkedin.com/in/isco-naifa/'
    },
    {
      label: 'GitHub',
      icon: 'pi pi-github',
      url: 'https://github.com/isconaifa'
    },
    {
      label: 'E-mail',
      icon: 'pi pi-envelope',
      url: 'mailto:francisco.naifa@sou.ufmt.br'
    }
  ];

  open(url: string) {
    window.open(url, '_blank');
  }

}
