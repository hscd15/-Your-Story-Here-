app.directive("resize", function ($window) {
    return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {
            return {
                'h': w[0].innerHeight,
                'w': w[0].innerWidth
            };
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.setArticle = function () {
                console.log("____________________")
                console.log("setArticle")
                return {
                    'height': (newValue.h) + "px",
                };
            };
            
            scope.setSection = function () {
                return {
                    'height': (newValue.h * 0.80) + "px"
                }
            }
            
            scope.setAside = function () {
                console.log("setAside")
                return {
                    'height': (newValue.h * 0.20) + "px"
                }
            }
        }, true);

        w.bind("resize", function () {
            scope.$apply();
        });
    }
});