(function() {
  'use strict';

  angular.module('hotel').controller('StaffController', StaffController);

  StaffController.$inject = ['$state', 'StaffService'];

  function StaffController($state, StaffService){
    
    let vm = this;

    vm.staffLogin = {};
    

    vm.login = function login(staffLogin) {
      StaffService.login(staffLogin.email, staffLogin.password)
      .then(function goToAllRes() {
        $state.go('reservations');

      });
    };

  }

}());
