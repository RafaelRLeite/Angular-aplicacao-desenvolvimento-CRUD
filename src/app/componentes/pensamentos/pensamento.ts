/**
 * Em Angular, uma "interface" é uma estrutura poderosa que permite definir a forma de um objeto,
 * especificando quais propriedades ele deve conter e quais tipos de valores essas propriedades devem ter.
 * As interfaces são uma parte fundamental do sistema de tipagem estática do TypeScript e são amplamente
 * usadas no desenvolvimento Angular para fornecer tipagem segura e melhorar a manutenção do código.
 *
 * export é utilizado para que a interface seja visivel em todo o projeto
 */
export interface Pensamento{
  id?: number
  conteudo: string
  autoria: string
  modelo: string

  /*
  Propriedade opcional
  data?: string

  Propriedade com tipo personalizado(interface ou class)
  endereco: Endereco

  Propriedade com união de tipos
  data: string | data
  */

}
