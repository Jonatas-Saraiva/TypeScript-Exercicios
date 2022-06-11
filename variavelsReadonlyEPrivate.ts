interface AnimalDomestico{
nome : string;
idade : Number;
parkFavorito? : String;
}


const meuCachorro : AnimalDomestico={
    nome :'Milena',
    idade :9,
    parkFavorito : 'Parque de Madureira'

}
 //formas diferente , utilizando get e set e tornando privado e utilizando readonly...

interface ICachorro {
  nome :String;
 idade :Number;
 parkFavorito? : String; 
}
type SomenteLeitura = {
    readonly [k in keyof ICachorro]-? : ICachorro[k];
}

class MeuCachorro implements ICachorro {
  nome;
    idade;

    constructor (nome:any,idade :any){
        this.nome=nome;
        this.idade=idade;
    }
}