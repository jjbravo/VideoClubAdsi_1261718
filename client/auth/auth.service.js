/*
* Auth Service es el Service que gestiona el proceso de
* Longin de la aplicacion
*/



'use strict';

function AuthService(){
  var Auth = {
    login: login
  };

  function login(){

  }

  return Auth;
}//Final Funtion AuthService

angular.module("videoClubApp")
.factory("AuthService",AuthService);
