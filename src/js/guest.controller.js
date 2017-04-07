(function() {
  'use strict';

  angular.module('hotel')
    .controller('GuestController', GuestController);

  GuestController.$inject = ['$state', 'GuestService'];

  /**
  * Controller for Guest data
  * @param {Object} $state       Ability to navigate to another state
  * @param {Object} GuestService The injected service that handles Guest data
  * @return {void}
  */
  function GuestController($state, GuestService) {
    var vm = this;

    vm.info = {};
    vm.message = null;

    /**
     * Calls the service to create a guest in the API, then sends the user to
     * view all guests in the system (on success)
     * @param  {Object}  info The data to create the guest with
     * @return {Promise}      The promise from the service
     */
    vm.create = function create(info) {
      vm.message = null;
      return GuestService.create(info)
        .then(function goToAllGuests() {
          $state.go('guests');
        })
        .catch(function showError(res) {
          console.warn(res);
          let message = res && res.data && res.data.error && res.data.error.message;
          vm.message = message || 'Sorry, but I was unable to create the guest.';
        });
    };
  }
})();
