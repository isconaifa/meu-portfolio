import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {

  //injeta o HttpClient
  private readonly http = inject(HttpClient);
   private dataUrl = '/data/certificates.json';

   //Função que retorna todas as certificações
   getAll(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.dataUrl);
  }
  
}
