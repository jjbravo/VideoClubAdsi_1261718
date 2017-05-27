'use strict';

function usuariosService($resource,API){
	return $resource(API + '/api/usuarios',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

usuariosService.$inject = ['$resource','API'];
angular.module('videoClubApp')
  .factory('usuariosService',usuariosService);
