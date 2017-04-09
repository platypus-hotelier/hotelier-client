(function() {
  'use strict';

  angular.module('hotel').controller('RoomController', RoomController);

  RoomController.$inject = ['$state', 'RoomService'];

  function RoomController($state, RoomService) {

    let vm = this;

    vm.rooms = [];
    vm.room = {};

    vm.getAllRooms = function getAllRooms() {
      RoomService.getAllRooms()
      .then(function handleRoomData(data) {
        vm.rooms = data;
        console.log(data);
      })
      .catch(function handleError(err) {
        console.warn(err);
      });
    }
    vm.getAllRooms();

  }

}());
