import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { IMAGE_CONFIG } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  /*
    Injeção de dependencias do serviço PensamentoService para utilizar os seus metodos de comunicação
    com o backend (GET, POST, PUT, DELETE)
  */
  constructor(private service: PensamentoService){}

  /*
    Metodo que é executado inicialmente toda vez que o componente é renderizado.
    Para conseguir observar os dados do retorno do Observable tenho que assinar ou seja subscribe

    Resumindo tenho que subscribe para ver as notificações(alterações) do retorno Observable e
    jogar em uma variavel listaPensamentos que depois o seu valor vai ser atribuido, atravez de
    uma arrow function, a variavel global da classe this.listaPensamentos.
  */
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos
    })
  }
}
