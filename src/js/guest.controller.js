(function() {
    'use strict';

    angular
        .module('hotel')
        .controller('GuestController', GuestController);

    GuestController.$inject = [];

    /**
     * Controller for Guest data
     */
    function GuestController() {
        var vm = this;

        vm.info = {};

        vm.create = function create(info) {
            console.log('creating a guest with ', info);
        };
    }
})();
