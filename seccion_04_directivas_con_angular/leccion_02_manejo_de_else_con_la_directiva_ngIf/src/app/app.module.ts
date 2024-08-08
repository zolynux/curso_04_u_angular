import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PersonasComponent, PersonaComponent],
  imports: [FormsModule, CommonModule],
  exports: [PersonasComponent, PersonaComponent],
  providers: [],
})
export class AppModule {}
