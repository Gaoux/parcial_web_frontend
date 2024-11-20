import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearContratoComponent } from './crear-contrato/crear-contrato.component';
import { MostrarContratosComponent } from './mostrar-contratos/mostrar-contratos.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CrearContratoComponent, MostrarContratosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

}
