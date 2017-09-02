'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
    this.showValidaDocumento = false;
  }

  createUser(){
  	this.usuariosService.createEmpleados(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }

  validarNumDocumento(){
    console.log("NumDocumento",this.usuario.numDocumento);
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response => {
      console.log("Valida ",response);
      if(response.length > 0){
        this.showValidaDocumento = true;

      }else{
        this.showValidaDocumento = false;

      }
    })
    .catch(err => {
      console.log("No existe",err);

    })
  }
}
UsuariosCreateComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
