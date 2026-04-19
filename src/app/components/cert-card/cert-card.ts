import { Component, input } from '@angular/core';
import { Certificate } from '../../models/certificate';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cert-card',
  imports: [CardModule, TagModule, ButtonModule],
  templateUrl: './cert-card.html',
  styleUrl: './cert-card.scss',
})
export class CertCard {
  certificate = input.required<Certificate>();

  openCredential() {
    window.open(this.certificate().credentialUrl, '_blank');
  }

}
