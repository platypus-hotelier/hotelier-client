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
    }

    /**
    * Retrieves a list of all staff members
    * @return {Promise}
    */
    function getAllStaff(){
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs',
        method: 'GET'
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
        method: 'GET'
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
          method: 'GET'
        })
        .then(function handleResponse(response) {
          console.log(response, response.data, response.id);
          return response.data;
        });
      }
    }

    /**
    * Retrieves authentication data for a staff member
    * @pr
    * @return {Promise}
    */
    function login(email,password) {
      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/login',
        method: 'POST',
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
        localStorage.setItem('token', response.data.id);
        return token = response.data.id;

      });

    }

<<<<<<< HEAD
=======
    /**
     * logs a user out
     * @return {[type]} [description]
     */
    function logout() {


      return $http({
        url: 'https://platypus-hotelier-api.herokuapp.com/api/Staffs/logout',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }


      })
      .then(function handleResponse(response){
        token = null;
        localStorage.removeItem('token');
        return token = response.data;
      });
    }

>>>>>>> f5f6f2609ba3ae39ae512cc91f544a8010709111
    return {
      getAllStaff: getAllStaff,
      getToken: getToken,
      login: login,
<<<<<<< HEAD
=======
      logout: logout
>>>>>>> f5f6f2609ba3ae39ae512cc91f544a8010709111
    };

  }

})();
