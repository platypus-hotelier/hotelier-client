(function() {
  'use strict';
  angular.module('hotel').factory('GuestService', GuestService);

  GuestService.$inject = ['$http'];
  function GuestService($http){
    /**
     * getAllGuests should
     * @return {Promise}
     */
   function getAllGuests(){
     return $http({
       url: 'https://platypus-hotelier-api.herokuapp.com/api/guests',
       method: 'Get'
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
