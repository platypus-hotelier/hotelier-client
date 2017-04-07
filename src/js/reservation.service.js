(function() {
  'use strict';

  angular.module('hotel').factory('ReservationService', ReservationService);

    ReservationService.$inject = ['$http'];

    function ReservationService($http) {

      function createRes(reservation) {
        console.log('inside createRes');
        return $http({
          url: 'https://platypus-hotelier-api.herokuapp/api/Reservations',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            reservation: {
              checkinDate: checkinDate,
              checkoutDate: checkoutDate,
              numberOfGuests: numberOfGuests,
              guestId: guestId,
              roomId: roomId
            }
          }
        })
        .then(function handleResponse(response) {
          console.log('after .then in createRes');
          return response.data;
        });
      }

      function getAllRes(page = 0) {
        let pagesize = 6;

        return $http({
          url: 'https://platypus-hotelier-api.herokuapp/api/Reservations',
          method: 'GET',
          })
          .then(function handleResponse(response) {
            return response.data;
          });
      }
      return {
        createRes: createRes,
        getAllRes: getAllRes
      };

    }

}());
