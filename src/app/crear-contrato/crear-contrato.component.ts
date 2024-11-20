import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContratoService } from '../servicios/contrato.service'; 
import { Contrato } from '../models/contrato';

@Component({
  selector: 'app-crear-contrato',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent {
  contrato: Contrato = {
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  submitMessage: string = ''; // Variable to hold the success/error message
  messageType: 'success' | 'error' = 'success'; // Determines the message type for styling

  constructor(private contratoService: ContratoService) { }

  onSubmit(): void {
    this.contratoService.createContrato(this.contrato).subscribe(
      response => {
        console.log('Contrato creado exitosamente:', response);
        this.submitMessage = 'Contrato creado exitosamente.';
        this.messageType = 'success';
      },
      error => {
        console.error('Hubo un error al crear el contrato:', error);
        this.submitMessage = 'Hubo un error al crear el contrato. Por favor, inténtelo nuevamente.';
        this.messageType = 'error';
      }
    );
  }
}
