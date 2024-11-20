import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoService } from '../servicios/contrato.service'; 
import { Contrato } from '../models/contrato'; 

@Component({
  selector: 'app-mostrar-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-contratos.component.html',
  styleUrls: ['./mostrar-contratos.component.css']
})
export class MostrarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe(
      (response: Contrato[]) => {
        this.contratos = response;
      },
      (error) => {
        console.error('Hubo un error al obtener los contratos:', error);
      }
    );
  }
}
