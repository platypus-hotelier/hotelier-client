(function() {
  'use strict';

  angular.module('hotel')
    .factory('GuestService', GuestService);

  GuestService.$inject = [];

  /**
   * The connection between Guests and the API
   * @return {Object} This service's functions
   */
  function GuestService() {

    /**
     * Creates a guest in the API with the data provided
     * @param  {Object}  info The guest data (name, email, phone)
     * @return {Promise}      Will resolve with the new guest data from the server
     */
    function create(info) {
      console.log('Creating new guest in API using', info);
      info.id = Date.now();
      return Promise.resolve(info);  // for now, we'll fake it
    }

    return {
      create: create
    };
  }
})();
