import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonasComponent, PersonaComponent],
  imports: [FormsModule],
  exports: [PersonasComponent, PersonaComponent],
  providers: [],
})
export class AppModule {}
