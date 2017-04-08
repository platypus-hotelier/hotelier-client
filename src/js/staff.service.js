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
    * logs user in and gets a token
    * @param  {string} email
    * @param  {string} password
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
        localStorage.setItem('token', response.data.id);
        token = response.data.id;
        return token;
      });

    }
    /**
    * logs a user out and removes their token
    * @return {Promise}
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
      .then(function handleResponse(){
        token = null;
        localStorage.removeItem('token');
      });
    }

    return {
      getToken: getToken,
      login: login,
      logout: logout

    };
  }

})();
