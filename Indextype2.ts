// forma de trazer uma variavel de outro local de codigo....
import {numero} from './typing.js';


interface Jquery{
    novaFucao() :void;
}


console.log(numero)

//utilizando Omit para ocultar um caracteristica de interface pessoa...
interface pessoa{
    nome:string;
    idade:Number;
    nacionalidade : string;
}

interface brasileira extends Omit  <pessoa,'nacionalidade'>{

}

const brasileiro :brasileira ={
    nome:'ssss',
   idade : 2,
}