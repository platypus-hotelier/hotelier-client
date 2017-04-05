(function() {
  'use strict';

  angular.module('hotel').factory('StaffService', StaffService);

  LoginService.$inject = ['$http'];

  function StaffService($http) {

    let token;

    /**
     * Returns the authorization token retrieved by getAuth
     * @return {String} Staff id authorization key
     */
    function getToken() {
      return token;
    }

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
     * Retrieves a single staff member record
     * @return {Promise} 
     */
    function getStaff() {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/:id',
        method: 'get'
      })
      .then(function handleResponse(response) {
        return response.data;
      });

      /**
      * Retrieves authentication data for a staff member
      * @return {Promise}
      */
      function getAuth() {
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
        login: login,
        getToken: getToken,
        getAuth: getAuth
      };
    }
  }
}());
