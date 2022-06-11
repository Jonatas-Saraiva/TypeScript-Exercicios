interface IAnimal{
nome : string;
tipo : 'terrestre' | 'aquatico' ;
idade : number ;
domestico : boolean;

executarRugido(alturaEmDecibes:number):void;
}
interface IFelinos extends IAnimal{
 
 VisaoNoturna : boolean;
   
}
interface ICaninos extends IAnimal {
  porte : 'pequeno'| 'medio'| 'grande'; 
}

type IDomestico =  IFelinos | ICaninos;


const animal : IAnimal ={
  nome : "Gorilla",
  tipo :"terrestre",
  idade: 25  ,
  domestico : false,
  executarRugido:(alturaEmDecibes)=>(`${alturaEmDecibes}`)
}
const Felino1 :IFelinos ={
    nome :"Leão",
    tipo :"terrestre",
    idade:5,
    domestico: false,
    VisaoNoturna:true,
    executarRugido:(alturaEmDecibes)=>(`${alturaEmDecibes}`)
} 
const ICachorro :IDomestico  = {
nome : 'cachorro',
domestico : true,
idade : 5,
tipo : 'terrestre',
porte : 'pequeno',
executarRugido:(alturaEmDecibes)=>(`${alturaEmDecibes}`)
}


