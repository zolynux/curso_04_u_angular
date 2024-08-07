import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [PersonasComponent, PersonaComponent],
  exports: [PersonasComponent, PersonaComponent],
  providers: [],
})
export class AppModule {}
