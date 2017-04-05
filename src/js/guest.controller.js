(function() {
  'use strict';

  angular.module('hotel').controller('GuestController', GuestController);

  GuestController.$inject = ['GuestService'];

  function GuestController(GuestService){
    let vm = this;
  }

}());
