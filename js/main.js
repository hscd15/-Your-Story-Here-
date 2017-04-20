var app = angular.module("yourStoryHere", ["ui.router", "ngAnimate"]);

app.config((["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state("home", {
                    url: "/",
                    views: {
                        'content': {
                            templateUrl: 'templates/home.html',
                        }
                    }
                });
}]);