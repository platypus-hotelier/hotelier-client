(function() {
  'use strict';

  angular.module('hotel').controller('StaffController', StaffController);

  StaffController.$inject = ['StaffService'];

  function StaffController(StaffService){
    let vm = this;

    vm.staffLogin = {};
    vm.reservations = [];
    vm.reservation = {};


    vm.login = function login(staffLogin) {
          StaffService.login(staffLogin.email, staffLogin.password)
            .then(function goToAllRes() {
              $state.go('reservations');
            });
        };

    vm.createRes = function createRes(reservation) {
      StaffService.createRes(reservation)
        .then(function goToAllRes() {
          $state.go('reservations');

        });
    };
  }

}());
