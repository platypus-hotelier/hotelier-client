(function() {
  'use strict';

  angular.module('hotel').factory('StaffService', StaffService);

  StaffService.$inject = ['$http'];

  function StaffService($http) {

    /**
     * Retrieves a list of all staff members
     * @return {Promise}
     */
    function getAllStaff(){
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs',
        method: 'get'
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }

    /**
     * Retrieves authentication data for a staff member
     * @return {Promise}
     */
    function staffLogin() {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/login',
        method: 'get'
      })
      .then(function handleResponse(response) {
        return response.data;
      });

    }
    return {
      getAllStaff: getAllStaff,
      staffLogin: staffLogin
    };
  }

}());
