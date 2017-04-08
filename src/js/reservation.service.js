(function() {
  'use strict';

  angular.module('hotel').factory('ReservationService', ReservationService);

    ReservationService.$inject = ['$http', 'StaffService'];

    function ReservationService($http, StaffService) {

      function createRes(reservation) {
        console.log('inside createRes');
        return $http({
          url: 'https://platypus-hotelier-api.herokuapp.com/api/Reservations',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': StaffService.getToken()
          },
          data: {
              checkinDate: reservation.checkinDate,
              checkoutDate: reservation.checkoutDate,
              numberOfGuests: reservation.umberOfGuests,
              guestId: reservation.guestId,
              roomId: reservation.roomId
          }
        })
        .then(function handleResponse(response) {
          console.log('after .then in createRes');
          return response.data;
        });
      }

      function getAllRes() {
        console.log('inside service function get all res');

        return $http({
          url: 'https://platypus-hotelier-api.herokuapp.com/api/Reservations',
          method: 'GET',
          headers: {
            'Authorization': StaffService.getToken()
          }
          })
          .then(function handleResponse(response) {
            console.log('inside the .then of getAllRes');
            return response.data;
          });
      }
      return {
        createRes: createRes,
        getAllRes: getAllRes
      };

    }

}());
