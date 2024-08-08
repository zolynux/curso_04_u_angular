# Comunicación entre Componentes en Angular

La comunicación entre componentes en Angular es un aspecto esencial del desarrollo de aplicaciones, ya que permite que diferentes partes de una aplicación interactúen y compartan datos. Angular proporciona varias formas de lograr esta comunicación, cada una adecuada para diferentes situaciones dependiendo de la relación entre los componentes.

**Comando para agregar los componentes en Angular**

```bash
ng g c persona --skipTests=true
```

## Property Binding entre Componentes en Angular

### 1. **Comunicación de Padre a Hijo (Input Binding)**

Cuando tienes un componente padre que necesita enviar datos a un componente hijo, puedes utilizar la propiedad decorada con `@Input()` en el componente hijo.

#### Ejemplo:

**Componente Hijo (`hijo.component.ts`):**

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hijo",
  template: "<p>{{ mensaje }}</p>",
})
export class HijoComponent {
  @Input() mensaje: string = "";
}
```

**Componente Padre (`padre.component.ts`):**

```typescript
@Component({
  selector: "app-padre",
  template: '<app-hijo [mensaje]="mensajeDelPadre"></app-hijo>',
})
export class PadreComponent {
  mensajeDelPadre: string = "Hola desde el componente padre";
}
```

En este ejemplo, el componente padre (`PadreComponent`) envía un mensaje al componente hijo (`HijoComponent`) utilizando la propiedad `@Input()`.

### 2. **Comunicación de Hijo a Padre (Output Binding)**

Para que un componente hijo envíe datos al componente padre, se usa el decorador `@Output()` junto con un `EventEmitter`.

#### Ejemplo:

**Componente Hijo (`hijo.component.ts`):**

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hijo",
  template:
    '<button (click)="enviarMensaje()">Enviar mensaje al padre</button>',
})
export class HijoComponent {
  @Output() mensajeEmitter = new EventEmitter<string>();

  enviarMensaje() {
    this.mensajeEmitter.emit("Hola desde el componente hijo");
  }
}
```

**Componente Padre (`padre.component.ts`):**

```typescript
@Component({
  selector: "app-padre",
  template:
    '<app-hijo (mensajeEmitter)="recibirMensaje($event)"></app-hijo><p>{{ mensajeRecibido }}</p>',
})
export class PadreComponent {
  mensajeRecibido: string = "";

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
```

Aquí, el componente hijo (`HijoComponent`) emite un evento que el componente padre (`PadreComponent`) escucha para recibir el mensaje.

### 3. **Comunicación entre Componentes Hermanos (a través de un Componente Padre)**

Cuando dos componentes hermanos necesitan comunicarse, generalmente se realiza la comunicación a través del componente padre, que actúa como intermediario.

#### Ejemplo:

- **Hijo 1** envía un mensaje al **Padre**.
- **Padre** recibe el mensaje y lo pasa a **Hijo 2**.

**Componente Padre (`padre.component.ts`):**

```typescript
@Component({
  selector: "app-padre",
  template: `
    <app-hijo1 (mensajeEmitter)="recibirMensaje($event)"></app-hijo1>
    <app-hijo2 [mensaje]="mensajeDelHijo1"></app-hijo2>
  `,
})
export class PadreComponent {
  mensajeDelHijo1: string = "";

  recibirMensaje(mensaje: string) {
    this.mensajeDelHijo1 = mensaje;
  }
}
```

**Componente Hijo 1 (`hijo1.component.ts`)** y **Componente Hijo 2 (`hijo2.component.ts`)** funcionan como en los ejemplos anteriores.

### 4. **Comunicación a través de un Servicio Compartido**

Otra manera eficaz de comunicar componentes, especialmente si no tienen una relación directa de padre-hijo, es utilizando un servicio compartido. Un servicio puede mantener datos o manejar eventos a los que los componentes pueden suscribirse.

#### Ejemplo:

**Servicio (`comunicacion.service.ts`):**

```typescript
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComunicacionService {
  private mensajeSource = new Subject<string>();
  mensaje$ = this.mensajeSource.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensajeSource.next(mensaje);
  }
}
```

**Componente Emisor (`emisor.component.ts`):**

```typescript
import { Component } from "@angular/core";
import { ComunicacionService } from "./comunicacion.service";

@Component({
  selector: "app-emisor",
  template: '<button (click)="enviar()">Enviar mensaje</button>',
})
export class EmisorComponent {
  constructor(private comunicacionService: ComunicacionService) {}

  enviar() {
    this.comunicacionService.enviarMensaje("Mensaje desde el emisor");
  }
}
```

**Componente Receptor (`receptor.component.ts`):**

```typescript
import { Component, OnInit } from "@angular/core";
import { ComunicacionService } from "./comunicacion.service";

@Component({
  selector: "app-receptor",
  template: "<p>{{ mensajeRecibido }}</p>",
})
export class ReceptorComponent implements OnInit {
  mensajeRecibido: string = "";

  constructor(private comunicacionService: ComunicacionService) {}

  ngOnInit() {
    this.comunicacionService.mensaje$.subscribe((mensaje) => {
      this.mensajeRecibido = mensaje;
    });
  }
}
```

En este caso, ambos componentes utilizan un servicio compartido (`ComunicacionService`) para enviar y recibir mensajes.

### Resumen

- **Padre a Hijo**: Usar `@Input()`.
- **Hijo a Padre**: Usar `@Output()` y `EventEmitter`.
- **Entre Hermanos**: Pasar datos a través de un componente padre.
- **Componentes no relacionados**: Usar un servicio compartido.

## Estos métodos permiten una comunicación eficiente entre los componentes de una aplicación Angular, manteniendo un flujo de datos claro y organizado.

---

# Event Binding entre Componentes en Angular
