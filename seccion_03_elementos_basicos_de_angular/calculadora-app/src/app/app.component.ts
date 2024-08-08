import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }
}
