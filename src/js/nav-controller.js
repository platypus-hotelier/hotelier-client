(function() {
  'use strict';

  angular.module('hotel')
  .controller('NavController', NavController);

  NavController.$inject = ['StaffService'];
  function NavController(StaffService){
    let vm = this;

    vm.logout = function logout(){
      StaffService.logout();
    };

    vm.isLoggedIn = function isLoggedIn(){
      return !!StaffService.getToken();
    };

  }
}());
