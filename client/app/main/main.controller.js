'use strict';

(function() {

  class MainController {

    constructor() {
      this.estilos = [
        "nuevo",
        "usado"
      ];
    }

    $onInit() {

    }
  }

  angular.module('videoClubApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
