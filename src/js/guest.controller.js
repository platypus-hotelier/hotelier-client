(function() {
  'use strict';

  angular.module('hotel').controller('GuestController', GuestController);

  GuestController.$inject = ['GuestService'];

  function GuestController(GuestService){
    let vm = this;
    vm.guests = [];

    vm.getAllGuests() = function getAllGuests(){
      GuestService.getAllGuests()
      .then(function handleGuestData(data){
        vm.guests = data;
        console.log(data);
      });
    };
  }

}());
