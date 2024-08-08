import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css',
})
export class ResultadoComponent {
  @Input() resultadoHijo: number;
}
