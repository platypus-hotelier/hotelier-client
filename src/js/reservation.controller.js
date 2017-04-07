(function() {
  'use strict';

  angular.module('hotel').controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$state', 'ReservationService'];

  function ReservationController($state, ReservationService) {

    let vm = this;

    vm.reservations = [];
    vm.reservation = {};

    vm.createRes = function createRes(reservation) {
      ReservationService.createRes(reservation)
      .then(function goToAllRes() {
        $state.go('reservations');
      })
      .catch(function handleError(err) {
        console.warn(err);
      });
    };

    vm.getAllRes = function getAllRes() {
      console.log('calling get all res');
      ReservationService.getAllRes()
      .then(function handleResData(data) {
        console.log('inside getAllRes', vm.reservations[0]);
        vm.reservations = data;
        console.log(data);
      })
      .catch(function handleError(err) {
        console.warn(err);
      });
    };

    vm.getAllRes();


  }


}());
