(function() {
  'use strict';

  angular.module('hotel').factory('StaffService', StaffService);

  StaffService.$inject = ['$http'];

  function StaffService($http) {

    let token  = localStorage.getItem('token');

    /**
    * Returns the authorization token retrieved by getAuth
    * @return {String} Staff id authorization key
    */
    function getToken() {
      return token;
      console.log(token);
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
    function getStaff(staff) {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/:id',
        method: 'get'
      })
      .then(function handleResponse(response) {
        return response.data;
      });



    }
    /**
    * Retrieves authentication data for a staff member
    * @pr
    * @return {Promise}
    */
    function login(email,password) {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/login',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
         },
        data: {
          email: email,
          password: password
        }
      })
      .then(function handleResponse(response) {
        console.log(response);
        console.log(token);
        localStorage.setItem('token', angular.toJson(response.data.id));
        return token = response.data.id;

      });



    }


    return {
      getAllStaff: getAllStaff,
      getToken: getToken,
      login: login
    };

  }

})();
