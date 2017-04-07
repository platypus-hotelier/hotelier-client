(function() {
  'use strict';

  angular.module('hotel').controller('GuestController', GuestController);

  GuestController.$inject = ['GuestService'];

  function GuestController(GuestService){
    let vm = this;
    vm.guest = [];

    /**
     * getAllGuests should be able to retrieve all guests in the database
     * @return {Promise}
     */
    vm.getAllGuests = function getAllGuests(){
      GuestService.getAllGuests()
      .then(function handleGuestData(data){
        vm.guest = data;
        console.log(data);
      });
    };
    vm.getAllGuests();
  }

}());
