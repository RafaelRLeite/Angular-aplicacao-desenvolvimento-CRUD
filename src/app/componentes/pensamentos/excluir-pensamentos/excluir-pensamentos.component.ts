import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    // A classe que fornece informações sobre as rotas, os caminhos, os parametros que vão vim dos cartões de pensamentos
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    /**
     * snapshot é uma captura instantania da rota no momento em que foi acessada
     * paramMap tras um Map dos parametros, as informações, obrigatorias e opcionais do pensamento acessado pela rota
     * get recebe como parametro o key do valor a ser retornado de dentro do Map
     *  */
    const id = this.route.snapshot.paramMap.get('id')
    /*
      Foi feito o parseInt porque o get() retorna uma string e o id do template é number, depois foi utilizado
      o operador ! para dizer que o valor não é nulo.
    */
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
    this.service.excluir(this.pensamento.id).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
