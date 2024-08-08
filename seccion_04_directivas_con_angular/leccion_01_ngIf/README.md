# Lección 1 - Directiva \*ngIf con Angular

La directiva `*ngIf` en Angular es una directiva estructural que se utiliza para mostrar o eliminar un elemento del DOM en función de una condición booleana. Esto significa que el elemento al que se aplica `*ngIf` solo se renderizará en la página si la condición que se evalúa es `true`. Si la condición es `false`, el elemento no se mostrará en el DOM.

### Sintaxis básica

```html
<div *ngIf="condición">Este contenido solo se muestra si la condición es verdadera.</div>
```

### Ejemplo

Supongamos que tienes una propiedad llamada `mostrarTexto` en tu componente que es de tipo booleano. Puedes usar `*ngIf` para mostrar un mensaje solo cuando `mostrarTexto` es `true`:

```typescript
@Component({
  selector: "app-ejemplo",
  template: `
    <button (click)="toggleTexto()">Mostrar/Ocultar Texto</button>
    <p *ngIf="mostrarTexto">Este es un texto condicional.</p>
  `,
})
export class EjemploComponent {
  mostrarTexto: boolean = false;

  toggleTexto() {
    this.mostrarTexto = !this.mostrarTexto;
  }
}
```

En este ejemplo, el párrafo con el texto "Este es un texto condicional" solo se mostrará si `mostrarTexto` es `true`. El botón alterna el valor de `mostrarTexto`, lo que hace que el texto aparezca o desaparezca cuando se hace clic en el botón.

### ¿Cómo funciona?

- **Eliminación y adición al DOM**: Cuando la condición es `false`, Angular elimina completamente el elemento del DOM. Esto es diferente de simplemente ocultarlo con CSS, ya que no ocupa espacio en la página y no está presente en el árbol de elementos del navegador.
- **Desempeño**: Como `*ngIf` elimina y agrega elementos del DOM, es útil para mejorar el desempeño de la aplicación, especialmente si el elemento tiene componentes hijos o es costoso de renderizar.

### Uso avanzado

También puedes usar `*ngIf` junto con la sintaxis `else` para manejar un caso alternativo cuando la condición es `false`:

```html
<div *ngIf="condición; else otroCaso">Este contenido se muestra si la condición es verdadera.</div>
<ng-template #otroCaso>
  <p>Este contenido se muestra si la condición es falsa.</p>
</ng-template>
```

En este caso, si la condición es `false`, se renderizará el contenido dentro del `ng-template` etiquetado como `otroCaso`.

La directiva `*ngIf` es una herramienta poderosa para controlar la presentación condicional de elementos en una aplicación Angular.

