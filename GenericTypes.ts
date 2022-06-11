//se utiliza T nas funções <> diamantes para especificar quando não se sabe um valor tipos genericos. 


function adicionaApendiceALista <T>(array :any[],valor:T){
    return array.map(item => item + valor);

}


adicionaApendiceALista([,2,3,4],1)