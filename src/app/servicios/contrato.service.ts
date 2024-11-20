import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl = 'http://localhost:8082/api/contratos'; 

  constructor(private http: HttpClient) { }

  // Crear un nuevo contrato
  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiUrl, contrato);
  }

  // Obtener todos los contratos
  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl);
  }
}
