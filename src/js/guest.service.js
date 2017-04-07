(function() {
  'use strict';
  angular.module('hotel').factory('GuestService', GuestService);

  GuestService.$inject = ['$http', 'StaffService'];
  function GuestService($http, StaffService){
    /**
    * getAllGuests should get the guests
    * @return {Promise}
    */
    function getAllGuests(){
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Guests',
        method: 'Get',
        headers: {
          Authorization: StaffService.getToken()
        }

      })
      .then(function handleResponse(response){
        return response.data;
      });



    }
    return {
      getAllGuests: getAllGuests
    };
  }
}());
