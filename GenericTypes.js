"use strict";
//se utiliza T nas funções <> diamantes para especificar quando não se sabe um valor tipos genericos. 
function adicionaApendiceALista(array, valor) {
    return array.map(item => item + valor);
}
adicionaApendiceALista([, 2, 3, 4], 1);
