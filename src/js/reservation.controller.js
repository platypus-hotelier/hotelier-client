(function() {
  'use strict';

  angular.module('hotel').controller(function('ReservationController', ReservationController) {

    ReservationController.$inject = ['$state', 'ReservationService'];

    function ReservationController($state, ReservationService) {

      let vm = this;

      vm.reservations = [];
      vm.reservation = {};

      vm.createRes = function createRes(reservation) {
        StaffService.createRes(reservation)
        .then(function goToAllRes() {
          $state.go('reservations');

        });
      };

    }

  });


}());
