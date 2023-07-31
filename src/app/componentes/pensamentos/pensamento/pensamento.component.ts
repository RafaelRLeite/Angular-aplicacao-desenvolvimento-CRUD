import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

/*
  Foi usado o decorator @Input() para que a propriedade receba informações do componente pai dela
  A variavel foi tipada com a interface Pensamento do arquivo pensamento.ts
*/
  @Input() pensamento:Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  // Outra forma de utilizar a diretiva ngClass:
  /*
  @Component({
    selector: 'app-home',
    template: `
      <div>
        <h1 [ngClass]="{'color-blue': active}">
          Home!
        </h1>
        <button (click)="colorBlue()">
            Mudar cor
        </button>
      </div>
    `,
    styles: [
    ]
  })
  export class HomeComponent {
    active: boolean = true;

    constructor() { }

    colorBlue(){
      this.active = !this.active
    }
  }
  */

}
