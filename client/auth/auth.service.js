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
