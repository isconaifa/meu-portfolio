import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CertCard } from '../../components/cert-card/cert-card';
import { CertificateService } from '../../services/certificateService';
import { Certificate } from '../../models/certificate';

@Component({
  selector: 'app-certifications',
  imports: [FormsModule, ButtonModule, SelectButtonModule, CertCard],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications implements OnInit{
  //injeção de dependência
  private readonly service = inject(CertificateService);
  
  certificates = signal<Certificate[]>([]);
  selectedArea = signal<string>('Todos');

  areas = computed(() => {
    const unique = [...new Set(this.certificates().map(c => c.area))];
    return ['Todos', ...unique];
  });

  filtered = computed(() => {
    if (this.selectedArea() === 'Todos') return this.certificates();
    return this.certificates().filter(c => c.area === this.selectedArea());
  });

  totalHours = computed(() =>
    this.certificates().reduce((acc, c) => acc + c.hours, 0)
  );

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.certificates.set(data);
    });
  }

  setArea(area: string) {
    this.selectedArea.set(area);
  }
}
