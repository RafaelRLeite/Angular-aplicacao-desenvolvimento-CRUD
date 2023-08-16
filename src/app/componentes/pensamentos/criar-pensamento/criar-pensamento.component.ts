import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

pensamento: Pensamento = {
  conteudo: '',
  autoria: '',
  modelo: 'modelo1'
}

//Principal bloco para construção de formulários do Angular
formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    //Outro serviço para construção de formulários do Angular
    private formBuild:FormBuilder
  ){}

  ngOnInit(): void {
    //Criação dos atributos que irão constar no formulário
    this.formulario = this.formBuild.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1']
    })

    //Outra forma de criar uma formulário reativo:
    /*
        this.formulario = new FormGroup({
        conteudo: new FormControl(''),
        autoria: new FormControl(''),
        modelo: new FormControl('')
      })
    */
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento']) // router é usado para redirecionamento
    })
  }

  /*
    É possivel usar tanto routerLink="/listarPensamento" no html quanto este metodo para cancelar
  */
  cancelar(){
    //this.router.navigate(['/listarPensamento'])
  }

}
