var app = angular.module("yourStoryHere", ["ui.router", "ngAnimate"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("home", {
            url: "/",
            views: {
                'content': {
                    templateUrl: 'templates/home.html',
                }
            }
        })
        .state("homeStreet", {
            url: "/home-street",
            views: {
                'content': {
                    templateUrl: 'templates/home-street.html',
                }
            }
        })
        .state("mainStreet", {
            url: "/main-street",
            views: {
                'content': {
                    templateUrl: 'templates/main-street.html',
                    controller: "mainStreetController"
                }
            }
        });
}]);