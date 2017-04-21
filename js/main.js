var app = angular.module("yourStoryHere", ["ui.router", "ngAnimate"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("homeStreet", {
            url: "/",
            views: {
                'content': {
                    templateUrl: 'templates/home.html',
                    controller: "homeStreetController"
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