(function () {


    var app = angular.module('plunker', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);


    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
        // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })

        // route for the about page
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })

        // route for the contact page
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            });
        
        
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
    app.controller('MainCtrl', function ($scope) {
        $scope.name = 'World';
    });

    app.controller('homeController', function ($scope) {
        $scope.message = 'Look! I am a home page.';
        $scope.pageClass = 'home';
    });

    app.controller('aboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.pageClass = 'about';
    });

    app.controller('contactController', function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageClass = 'contact';
    });





})();

