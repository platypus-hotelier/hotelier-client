(function() {
  'use strict';

  angular.module('hotel').controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$state', 'ReservationService'];

  function ReservationController($state, ReservationService) {

    let vm = this;

    vm.reservations = [];
    vm.reservation = {};
    vm.message = null;
    vm.hasError = false;

    vm.createRes = function createRes(reservation) {
      ReservationService.createRes(reservation)
      .then(function goToAllRes() {
        $state.go('reservations');
      })
      .catch(function handleError(err) {
        console.warn(err);
      });
    };

    /**
     * Deletes a reservation using the Reservation Service and then fills the
     * message on the scope to allow display of success or error on the page
     * @param  {String} id The reservation to delete
     * @return {Promise}
     */
    vm.deleteRes = function deleteRes(id) {
      vm.hasError = false;
      return ReservationService.deleteRes(id)
        .then(function showDeleteSuccess() {
          vm.message = 'That reservation has been deleted!';
          vm.hasError = false;
          vm.getAllRes();
        })
        .catch(function showDeleteError(err) {
          console.warn(err);
          vm.message = 'There was a problem deleting that reservation.';
          vm.hasError = true;
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
