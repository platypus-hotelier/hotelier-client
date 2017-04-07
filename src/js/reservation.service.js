(function() {
  'use strict';

  angular.module('hotel').factory(function('ReservationService', ReservationService) {

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
      return {
        createRes: createRes
      };

    }

  });


}());
