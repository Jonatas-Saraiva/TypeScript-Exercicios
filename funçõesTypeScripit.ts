interface IAnimal{
nome : string;
tipo : 'terrestre' | 'aquatico' ;
idade : number ;
executarRugido(alturaEmDecibes:number);
}
interface IFelinos extends IAnimal{
   VisaoNoturna : boolean;
   
}

const animal : IAnimal ={
  nome : "Gorilla",
  tipo :"terrestre",
  idade: 25  ,
  executarRugido:(alturaEmDecibes)=>(`${alturaEmDecibes}`)
}
const Felino1 :IFelinos ={
    nome :"Leão",
    tipo :"terrestre",
    idade:5,
    VisaoNoturna:true,
    executarRugido:(alturaEmDecibes)=>(`${alturaEmDecibes}`)
}   