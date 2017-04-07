(function() {
  'use strict';

  angular.module('hotel').controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$state', 'ReservationService'];

  function ReservationController($state, ReservationService) {

    let vm = this;

    vm.reservations = [];
    vm.reservation = {};
    vm.page = -1;

    vm.createRes = function createRes(reservation) {
      ReservationService.createRes(reservation)
      .then(function goToAllRes() {
        $state.go('reservations');

      });
    };

    vm.getAllRes = function getAllRes() {
      vm.page++;
      ReservationService.getAllRes(vm.page)
      .then(function handleResData(data) {
        vm.reservations = vm.reservations.concat(data);
        console.log('inside getAllRes', vm.reservations[0]);
      })
      .catch(function handleError(err) {
        console.warn(err);
      });
    };

  }


}());
