interface IUsuario{
 nome :string;
 email:string;

}

interface Admin extends IUsuario{
   cargo : 'Gerente'|'Coordenador'|'Supervisor' ,
}

function redirecione (usuario :IUsuario|Admin ){
    if('cargo'in usuario){
       // redirecionar para interface de Administração. 
    }
    
    //redirecionar para interface de Usuario. 
}

interface IUsuario{
   nome :string;
   email:string;
   cargo ? : 'Gerente'|'Coordenador'|'Supervisor'|'funcionarios' ,
  }
  

function redirecionar (usuario :IUsuario|Admin ){
    if(usuario.cargo){
      // redirecionar(usuario.cargo) 
    }
    
    //redirecionar para interface de Usuario. 
}
