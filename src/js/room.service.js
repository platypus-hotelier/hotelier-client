(function() {
  'use strict';


  angular.module('hotel').factory('RoomService', RoomService);

  RoomService.$inject = ['$http', 'StaffService'];

  function RoomService($http, StaffService) {

    /**
     * Retrieves a list of all rooms in the hotel
     * @return {Promise} 
     */
    function getAllRooms() {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Rooms',
        method: 'GET',
        headers: {
          'Authorization': StaffService.getToken()
        }
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }
    return {
      getAllRooms: getAllRooms
    };
  }
}());
