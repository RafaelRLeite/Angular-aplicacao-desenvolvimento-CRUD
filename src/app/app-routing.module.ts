import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

/**
 * Modulo responsavel por configurar todas as rotas do projeto(caminhos do site)
 * Para criar uma rota deve-se incluir a URL no path: e depois indicar para qual componente sera direcionado no component:
 *
 * O RouterModule possui a propriedade routerLinkActive que é necessário apenas passar
 * a classe com o estilo que será aplicado no link.
 */
const routes: Routes = [
  {
  /*
    Quando o path for vazio, ou seja quando for o primeiro acesso no site, é necessário incluir outro parametro
    pathMatch: que diz se será lido a URL toda (full) ou so o prefixo (prefix)
  */
  path: '' ,
  redirectTo: 'listarPensamento', // Redireciona para outro rota
  pathMatch: 'full'
  },
  {
  path: 'criarPensamento' ,
  component: CriarPensamentoComponent
  },
  {
  path: 'listarPensamento' ,
  component: ListarPensamentoComponent
  },
  {
  /*
    É necessário incluir o envio do id na rota pois a modal, atravez do ActivatedRoute, pega o id e faz a requisição
    buscarPorId passando o id para renderizar as informações do cartão de pensamento.
  */
  path: 'excluirPensamento/:id' ,
  component: ExcluirPensamentosComponent
  },
  {
  path: 'editarPensamento/:id' ,
  component: EditarPensamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
