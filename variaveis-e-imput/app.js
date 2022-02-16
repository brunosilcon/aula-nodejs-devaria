const  readLine  =  require ( 'readline' ) .  criarInterface ( {
    entrada : processo . stdin ,   
    saída : processo . padrão
} )

const  minhaPrimeiraConstanteString  =  'Minha primeira consntante' ;
console.log ( minhaPrimeiraConstanteString ) ;
let  leituraDeCampo 
readLinha . question ( 'Informe sua idade:' ,  input  =>  {
    leituraDeCampo  =  entrada ;
    console.log ( `o usuário digitou: ${ leituraDeCampo } ` ) ;
}  ) ;
