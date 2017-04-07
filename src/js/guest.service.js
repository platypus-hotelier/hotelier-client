(function() {
  'use strict';

  angular.module('hotel')
  .factory('GuestService', GuestService);

  GuestService.$inject = ['$http', 'StaffService'];

  /**
  * The connection between Guests and the API
  * @param {Function} $http        The angular ajax method
  * @param {Object}   StaffService The service required to get the user's token
  * @return {Object}               This service's functions
  */
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



  /**
  * Creates a guest in the API with the data provided
  * @param  {Object}  info The guest data (name, email, phone)
  * @return {Promise}      Will resolve with the new guest data from the server
  */
  function create(info) {
    if (!info || !info.name || !info.email || !info.phone ||
      !info.name.length || !info.phone.length || !info.email.length) {
        return Promise.reject('name, email, and phone are required for creating a guest');
      }

      if (!StaffService.getToken()) {
        return Promise.reject('you must be logged in to create a guest');
      }

      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Guests',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': StaffService.getToken()
        },
        data: {
          fullName: info.name,
          phone: info.phone,
          email: info.email
        }
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }

    return {
      create: create,
      getAllGuests: getAllGuests
    };
  }

})();
