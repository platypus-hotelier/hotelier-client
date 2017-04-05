(function() {
  'use strict';

    angular.module('hotel', ['ui.router'])
      .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider) {

      $stateProvider
        .$state({
          name: 'home',
          url: '',
          templateUrl: 'views/home-page.template.html'
          

        });

    }

}());
