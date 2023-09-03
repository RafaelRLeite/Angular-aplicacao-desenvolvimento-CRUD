import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Classe de serviço onde tem toda a lógica de negocio e a comunicação com o backend
 */
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

/*
  Injeção de dependência do HttpClient na variavel http para poder realizar requisições
  Tem que ser importada no app.module.ts
  Essa injeção é feita no Angular nos construtores das Classes
*/
  constructor(private http: HttpClient) { }

/*
  A requisição me retorna um observaveis de uma lista de pensamentos
  O retorno Observable são dados observaveis, ou seja é feito uma conexão com o EndPoint de modo que se houver uma
  alteração nos dados do backend é possivel saber pelo frontend pelo retorno Observable.
*/
  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API , pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    // Foi utilizado a templete literals com duas crases(``) para interpolar o url + id em uma unica constante
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
