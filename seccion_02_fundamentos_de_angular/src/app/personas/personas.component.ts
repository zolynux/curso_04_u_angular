import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  template: `
    <h1 class="text-4xl">Listado de Personas</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>
  `,
})
export class PersonasComponent {}
