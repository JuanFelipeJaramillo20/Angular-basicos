import { Component } from '@angular/core'

@Component({
    selector: "app-contador",
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">+{{base}}</button>
        <button (click)="acumular(-base)">-{{base}}</button>

        <span> {{numero}} </span>
    `
})
export class contadorComponent{
    title = 'bases';
    numero: number = 0;
    base: number = 5;
  
    acumular(valor:number): void{
      this.numero += valor;
    }
}