(function() {
  'use strict';

  angular.module('hotel')
    .controller('GuestController', GuestController);

  GuestController.$inject = ['GuestService'];

  /**
  * Controller for Guest data
  * @param {Object} GuestService The injected service that handles Guest data
  * @return {void}
  */
  function GuestController(GuestService) {
    var vm = this;

    vm.info = {};

    /**
     * Calls the service to create a guest in the API, then sends the user to
     * view all guests in the system (on success)
     * @param  {Object}  info The data to create the guest with
     * @return {Promise}      The promise from the service
     */
    vm.create = function create(info) {
      return GuestService.create(info);
    };
  }
})();
