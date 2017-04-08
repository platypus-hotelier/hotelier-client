(function() {
  'use strict';

    angular.module('hotel', ['ui.router'])
      .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when('', '/');

      $urlRouterProvider.otherwise('/not-found');

      $stateProvider
        .state({
          name: 'home',
          url: '/',
          templateUrl: 'views/home-page.template.html'
        })
        .state({
          name: 'about-us',
          url: '/about-us',
          templateUrl: 'views/about-us.template.html'
        })
        .state({
          name: 'staff-login',
          url: '/login',
          templateUrl: 'views/staff-login.template.html',
          controller: 'StaffController',
          controllerAs: 'staffCtrl'
        })
        .state({
          name: 'reservations',
          url: '/reservations',
          templateUrl: 'views/reservations.template.html',
          controller: 'ReservationController',
          controllerAs: 'resCtrl'
        })
        .state({
          name: 'new-res',
          url: '/new-reservation',
          templateUrl: 'views/new-res.template.html',
          controller: 'ReservationController',
          controllerAs: 'resCtrl'
        })
        .state({
          name: 'guests',
          url: '/guests',
          templateUrl: 'views/guests.template.html',
          controller:'GuestController',
          controllerAs:'guestCtrl'
        })
        .state({
          name: 'create-guest',
          url: '/guests/create',
          templateUrl: 'views/create-guest.template.html',
          controller: 'GuestController',
          controllerAs: 'guestCtrl'
        })
        .state({
          name: 'new-guest',
          url: '/new-guest',
          templateUrl: 'views/new-guest.template.html'
        })
        .state({
          name: 'not-found',
          url: '/not-found',
          templateUrl: 'views/not-found.template.html'
        });

    }

}());
